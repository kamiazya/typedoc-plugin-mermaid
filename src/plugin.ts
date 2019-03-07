import { Converter } from 'typedoc/dist/lib/converter';
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Context } from 'typedoc/dist/lib/converter/context';
import { PageEvent } from 'typedoc/dist/lib/output/events';

/**
 * Mermaid plugin component.
 */
@Component({ name: 'mermaid' })
export class MermaidPlugin extends ConverterComponent {

  static metaMatcher = /<\/body>/;
  static script = `
    <script
      src="https://unpkg.com/mermaid@7.1.2/dist/mermaid.min.js"
    ></script>
    <script>
    mermaid.initialize({
      startOnLoad:true
    });
    </script>
    </body>
  `;

  /**
   * listen to event on initialisation
   */
  public initialize() {
    this
      .listenTo(this.owner, {
        [Converter.EVENT_RESOLVE_BEGIN]: this.onBegin,
      })
      .listenTo(this.application.renderer, {
        [PageEvent.END]: this.onPageEnd,
      });
  }

  /**
   * Triggered when the converter begins converting a project.
   */
  private onBegin(context: Context) {
    for (const key in context.project.reflections) {
      if (context.project.reflections.hasOwnProperty(key)) {
        const reflection = context.project.reflections[key];
        const comment = reflection.comment;
        // const mermaidCommentTag = comment.getTag('mermaid');
        if (comment !== undefined) {
          const mermaidTag = comment.getTag('mermaid');
          if (mermaidTag !== undefined) {
            const texts = mermaidTag.text.split('\n');
            const title = texts.shift();
            const mermaid = texts.join('\n');
            mermaidTag.text = `#### ${title} \n\n <div class="mermaid">${mermaid}</div>`;
          }
        }
      }
    }
  }

  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   * Remove duplicate lines to tidy up output
   */
  private onPageEnd(page: PageEvent) {
    const contents = page.contents;
    if (contents !== undefined) {
      if (MermaidPlugin.metaMatcher.test(contents)) {
        page.contents = contents.replace(
          MermaidPlugin.metaMatcher,
          MermaidPlugin.script,
        );
      }
    }
  }
}
