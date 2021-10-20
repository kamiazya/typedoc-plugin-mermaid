import * as html from 'html-escaper';
import { Converter, Context, PageEvent, Application, ReflectionKind } from 'typedoc';

/**
 * 1. Load mermaid.js library.
 * 2. Initialize mermaid.
 */
const script =
  '<script src="https://unpkg.com/mermaid/dist/mermaid.min.js"></script>' +
  '<script>mermaid.initialize({startOnLoad:true});</script>';

const mermaidBlockStart = '<div class="mermaid">';
const mermaidBlockEnd = '</div>';

export class MermaidPlugin {
  public addToApplication(app: Application): void {
    app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context: Context) => {
      this.onConverterResolveBegin(context);
    });

    app.renderer.on({
      [PageEvent.END]: (event: PageEvent) => {
        this.onEndPage(event);
      },
    });
  }

  private onConverterResolveBegin(context: Context): void {
    for (const reflection of context.project.getReflectionsByKind(ReflectionKind.All)) {
      const { comment } = reflection;
      if (comment) {
        comment.text = this.handleMermaidCodeBlocks(comment.text);
        for (const tag of comment.tags) {
          if (tag.tagName === 'mermaid') {
            tag.text = this.handleMermaidTag(tag.text);
          } else {
            tag.text = this.handleMermaidCodeBlocks(tag.text);
          }
        }
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
    return mermaidBlockStart + html.escape(mermaidCode.trim()) + mermaidBlockEnd;
  }

  private onEndPage(event: PageEvent): void {
    if (event.contents !== undefined) {
      event.contents = this.insertMermaidScript(event.contents);
    }
  }
  public insertMermaidScript(html: string): string {
    if (!html.includes(mermaidBlockStart)) {
      // this page doesn't need to load mermaid
      return html;
    }

    // find the closing </body> tag and insert our mermaid scripts
    const bodyEndIndex = html.lastIndexOf('</body>');
    return html.slice(0, bodyEndIndex) + script + html.slice(bodyEndIndex);
  }
}
