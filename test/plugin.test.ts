import { Application } from 'typedoc/dist/lib/application';
import { MermaidPlugin } from '../src/plugin';

describe('MermaidPlugin', () => {
  let plugin: MermaidPlugin;

  beforeEach(() => {
    const app = new Application();
    plugin = new MermaidPlugin(app.converter);
  });

  it('convert CommentTag', () => {
    const input = 'title\ngraph';
    const result = plugin.convertCommentTagText(input);
    expect(result).toMatch('#### title');
    expect(result).toMatch('<div class="mermaid">graph</div>');
    expect(result).toMatchSnapshot();
  });

  it('convert PageContents returns script tag for mermaid.js, initialize mermaid script, and body closing tag', () => {
    const input = '</body>';
    const result = plugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch('mermaid.initialize({');
    expect(result).toMatch(/src="https:\/\/unpkg.com\/mermaid\/dist\/mermaid.min.js"/);
    expect(result).toMatchSnapshot();
  });

  it('convert PageContents returns same value if body closing tag not exist', () => {
    const input = 'hoge';
    const result = plugin.convertPageContents(input);
    expect(result).toEqual('hoge');
    expect(result).toMatchSnapshot();
  });

  it('convert Markdown snippet returns same value if body closing tag not exist', () => {
    const input = '#### title\n\n```mermaid\ngraph LR\n  <a> --> <b>\n```\n\nmore text';
    const result = plugin.replaceMarkdownMermaidCodeBlocks(input);
    expect(result).toMatch('#### title\n');
    expect(result).toMatch('<div class="mermaid">graph LR\n  &lt;a&gt; --&gt; &lt;b&gt;</div>');
    expect(result).toMatch('\nmore text');
    expect(result).toMatchSnapshot();
  });
});
