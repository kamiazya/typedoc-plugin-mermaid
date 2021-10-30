import { MermaidPlugin } from '../src/plugin';

describe('MermaidPlugin', () => {
  const plugin = new MermaidPlugin();

  it('convert CommentTag', () => {
    const input = 'title\ngraph';
    const result = plugin.handleMermaidTag(input);
    expect(result).toMatch('#### title');
    expect(result).toMatch('class="mermaid');
    expect(result).toMatchSnapshot();
  });

  it('convert PageContents returns script tag for mermaid.js, initialize mermaid script, and body closing tag', () => {
    const input = '<head></head><body><div class="mermaid-block"></div></body>';
    const result = plugin.insertMermaidScript(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch('mermaid.initialize({');
    expect(result).toMatch(/src="https:\/\/unpkg.com\/mermaid\/dist\/mermaid.min.js"/);
    expect(result).toMatchSnapshot();
  });

  it('convert PageContents returns same value if body closing tag not exist', () => {
    const input = 'hoge';
    const result = plugin.insertMermaidScript(input);
    expect(result).toEqual('hoge');
    expect(result).toMatchSnapshot();
  });

  it('convert Markdown snippet returns same value if body closing tag not exist', () => {
    const input = '#### title\n\n```mermaid\ngraph LR\n  <a> --> <b>\n```\n\nmore text';
    const result = plugin.handleMermaidCodeBlocks(input);
    expect(result).toMatch('#### title\n');
    expect(result).toMatch('graph LR\n  &lt;a&gt; --&gt; &lt;b&gt;');
    expect(result).toMatch('\nmore text');
    expect(result).toMatchSnapshot();
  });
});
