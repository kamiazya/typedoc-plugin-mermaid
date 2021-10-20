import { MermaidPlugin } from '../src/plugin';

describe('MermaidPlugin', () => {
  const plugin = new MermaidPlugin();

  it('convert CommentTag', () => {
    const input = 'title\ngraph';
    const result = plugin.handleMermaidTag(input);
    expect(result).toMatch('#### title');
    expect(result).toMatch('<div class="mermaid">graph</div>');
    expect(result).toMatchSnapshot();
  });

  it('convert Markdown snippet returns same value if body closing tag not exist', () => {
    const input = '#### title\n\n```mermaid\ngraph LR\n  <a> --> <b>\n```\n\nmore text';
    const result = plugin.handleMermaidCodeBlocks(input);
    expect(result).toMatch('#### title\n');
    expect(result).toMatch('<div class="mermaid">graph LR\n  &lt;a&gt; --&gt; &lt;b&gt;</div>');
    expect(result).toMatch('\nmore text');
    expect(result).toMatchSnapshot();
  });
});
