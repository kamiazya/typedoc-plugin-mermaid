import { Converter } from 'typedoc/dist/lib/converter';
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Context } from 'typedoc/dist/lib/converter/context';
import { Comment, CommentTag } from 'typedoc/dist/lib/models/comments';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Option } from 'typedoc/dist/lib/utils';
import { ParameterType } from 'typedoc/dist/lib/utils/options/declaration';

/**
 * Mermaid plugin component.
 */
@Component({ name: 'mermaid' })
export class MermaidPlugin extends ConverterComponent {

  /**
   * 1. Load mermaid.js liblary.
   * 2. Initialize mermaid.
   * 3. Close body tag.
   */
  private get customScriptsAndBodyClosinngTag(): string {
    const mermaidVersion = this.mermaidVersion;
    return `
      <script
        src="https://unpkg.com/mermaid@${mermaidVersion}/dist/mermaid.min.js"
      ></script>
      <script>
      mermaid.initialize({
        startOnLoad: true,
      });
      </script>
      </body>
    `;
  }

  /**
   * fillter logic for Comment exist
   */
  private static filterComment(comment: undefined | Comment): comment is Comment {
    return comment !== undefined && !!comment;
  }

  /**
   * fillter logic for CommentTags exist
   */
  private static filterCommentTags(tags: CommentTag[] | undefined): tags is CommentTag[] {
    return tags !== undefined && !!tags;
  }

  /**
   * return turn when tag's paramName is 'mermaid'
   */
  private static isMermaidCommentTag(tag: CommentTag): boolean {
    return tag.tagName === 'mermaid';
  }

  /**
   * get CommentTags for using `@mermaid` anotation from Context.
   */
  private static mermaidTags(context: Context): CommentTag[] {
    return Object
      // get reflection from context
      .values(context.project.reflections)

      // get Comment from Reflection
      .map(reflection => reflection.comment)

      // filter only comment exist
      .filter(this.filterComment)

      // get CommentTags from Comment
      .map(comment => comment.tags)

      // filter only CommentTags exist
      .filter(this.filterCommentTags)

      // merge all CommentTags
      .reduce((a, b) => a.concat(b), [])

      // filter tag that paramName is 'mermaid'
      .filter(this.isMermaidCommentTag);
  }

  @Option({
    name: 'mermaidVersion',
    short: 'mmv',
    defaultValue: '7.1.2',
    help: 'Mermaid Plugin: Version of mermaid.js.',
    type: ParameterType.String,
  })
  /**
   * Version of mermaid.js.
   */
  public mermaidVersion: string;

  /**
   * Regex literal that matches body closing tag.
   */
  private readonly BODY_CLOSINNG_TAG = /<\/body>/;

  /**
   * The first line of text wraps h4.
   * The other wraps by div classed mermaid.
   */
  public convertCommentTagText(tagText: string): string {
    const texts = tagText.split('\n');
    // take first line
    const title = texts.shift();
    // the other
    const mermaid = texts.join('\n');
    return `#### ${title} \n\n <div class="mermaid">${mermaid}</div>`;
  }

  /**
   * Insert custom script before closing body tag.
   */
  public convertPageContents(contents: string): string {
    if (this.BODY_CLOSINNG_TAG.test(contents)) {
      return contents.replace(
        this.BODY_CLOSINNG_TAG,
        this.customScriptsAndBodyClosinngTag);
    }
    return contents;
  }

  /**
   * listen to event on initialisation
   */
  public initialize() {
    this
      .listenTo(this.owner, {
        [Converter.EVENT_RESOLVE_BEGIN]: this.onResolveBegin,
      })
      .listenTo(this.application.renderer, {
        [PageEvent.END]: this.onPageEnd,
      });
  }

  /**
   * Triggered when the converter begins converting a project.
   */
  public onResolveBegin(context: Context) {
    MermaidPlugin
      .mermaidTags(context)
      .forEach((tag) => {
        // convert
        tag.text = this.convertCommentTagText(tag.text);
      });
  }

  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   * Remove duplicate lines to tidy up output
   */
  public onPageEnd(page: PageEvent) {
    if (page.contents !== undefined) {
      // convert
      page.contents = this.convertPageContents(page.contents);
    }
  }
}
