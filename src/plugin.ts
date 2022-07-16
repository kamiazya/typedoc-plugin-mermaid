import * as html from 'html-escaper';
import { Converter, Context, PageEvent, Application, ReflectionKind, MarkdownEvent, ParameterType } from 'typedoc';

const style = String.raw`
<style>
:root.mermaid-enabled .mermaid-block > pre {
  display: none;
}
:root:not(.mermaid-enabled) .mermaid-block > .mermaid {
  display: none !important;
}

.mermaid-block > .mermaid[data-inserted].dark {
  display: var(--mermaid-dark-display);
}
.mermaid-block > .mermaid[data-inserted].light {
  display: var(--mermaid-light-display);
}

:root {
  --mermaid-dark-display: none;
  --mermaid-light-display: block;
}
@media (prefers-color-scheme: light) {
  :root {
    --mermaid-dark-display: none;
    --mermaid-light-display: block;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --mermaid-dark-display: block;
    --mermaid-light-display: none;
  }
}
body.light, :root[data-theme="light"] {
  --mermaid-dark-display: none;
  --mermaid-light-display: block;
}
body.dark, :root[data-theme="dark"] {
  --mermaid-dark-display: block;
  --mermaid-light-display: none;
}
</style>
`;

/**
 * 1. Load mermaid.js library.
 * 2. Initialize mermaid.
 * 3. Add special attribute after SVG has been inserted.
 */
function createScript(version: string): string {
  return String.raw`
<script src="https://unpkg.com/mermaid@${version}/dist/mermaid.min.js"></script>
<script>
(function() {
  if (typeof mermaid === "undefined") {
    return;
  }

  document.documentElement.classList.add("mermaid-enabled");

  mermaid.initialize({startOnLoad:true});

  requestAnimationFrame(function check() {
    let some = false;
    document.querySelectorAll("div.mermaid:not([data-inserted])").forEach(div => {
      some = true;
      if (div.querySelector("svg")) {
        div.dataset.inserted = true;
      }
    });

    if (some) {
      requestAnimationFrame(check);
    }
  });
})();
</script>
`;
}

const mermaidBlockStart = '<div class="mermaid-block">';
const mermaidBlockEnd = '</div>';

export class MermaidPlugin {
  constructor(private app: Application) {}

  public initialize(): void {
    this.app.options.addDeclaration({
      help: '[Mermaid Plugin] The version of mermaid.js to use.',
      name: 'mermaidVersion',
      type: ParameterType.String,
      defaultValue: 'latest',
    });

    this.app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context: Context) => {
      this.onConverterResolveBegin(context);
    });

    this.app.renderer.on({
      [PageEvent.END]: (event: PageEvent) => {
        this.onEndPage(event);
      },
    });

    // high priority markdown parser to catch blocks before the built-in parser
    this.app.renderer.on(
      MarkdownEvent.PARSE,
      (event: MarkdownEvent) => {
        this.onParseMarkdown(event);
      },
      this,
      1000,
    );
  }

  private onConverterResolveBegin(context: Context): void {
    for (const reflection of context.project.getReflectionsByKind(ReflectionKind.All)) {
      const { comment } = reflection;
      if (comment) {
        comment.summary
          .filter((part) => part.kind === 'code')
          .forEach((part) => {
            part.text = this.handleMermaidCodeBlocks(part.text);
          });

        comment.getTags('@mermaid').forEach((part) => {
          const p = part.content[0];
          if (p?.text) {
            p.text = this.handleMermaidTag(p.text);
          }
        });
      }
    }
  }
  /**
   * Convert the text of `@mermaid` tags.
   *
   * This first line will be the title. It will be wrapped in an h4.
   * All other lines are mermaid code and will be converted into a mermaid block.
   */
  public handleMermaidTag(text: string): string {
    const title = /^.*/.exec(text)?.[0] ?? '';
    const code = text.slice(title.length);

    return `#### ${title}\n\n${this.toMermaidBlock(code)}`;
  }
  /**
   * Replaces mermaid code blocks in Markdown text with mermaid blocks.
   */
  public handleMermaidCodeBlocks(text: string): string {
    return text.replace(/^```mermaid[ \t\r]*\n([\s\S]*?)^```[ \t]*$/gm, (m, code) => {
      return this.toMermaidBlock(code);
    });
  }
  /**
   * Creates a mermaid block for the given mermaid code.
   */
  private toMermaidBlock(mermaidCode: string): string {
    const htmlCode = html.escape(mermaidCode.trim());

    const dark = `<div class="mermaid dark">%%{init:{"theme":"dark"}}%%\n${htmlCode}</div>`;
    const light = `<div class="mermaid light">%%{init:{"theme":"default"}}%%\n${htmlCode}</div>`;
    const pre = `<pre><code class="language-mermaid">${htmlCode}</code></pre>`;

    return mermaidBlockStart + dark + light + pre + mermaidBlockEnd;
  }

  private onEndPage(event: PageEvent): void {
    if (event.contents !== undefined) {
      event.contents = this.insertMermaidScript(event.contents);
    }
  }

  public onParseMarkdown(event: MarkdownEvent): void {
    event.parsedText = this.handleMermaidCodeBlocks(event.parsedText);
  }

  public insertMermaidScript(html: string): string {
    if (!html.includes(mermaidBlockStart)) {
      // this page doesn't need to load mermaid
      return html;
    }

    // find the closing </body> tag and insert our mermaid scripts
    const headEndIndex = html.indexOf('</head>');
    html = html.slice(0, headEndIndex) + style + html.slice(headEndIndex);

    // find the closing </body> tag and insert our mermaid scripts
    const bodyEndIndex = html.lastIndexOf('</body>');
    return (
      html.slice(0, bodyEndIndex) +
      createScript(this.app.options.getValue('mermaidVersion') as string) +
      html.slice(bodyEndIndex)
    );
  }
}
