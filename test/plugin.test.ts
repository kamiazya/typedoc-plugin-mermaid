import { MermaidPlugin } from '../src/plugin';

describe('MermaidPlugin', () => {
  it('convert CommentTag', () => {
    const input = 'title\ngraph';
    const result = MermaidPlugin.convertCommentTagText(input);
    expect(result).toMatch('#### title');
    expect(result).toMatch('<div class="mermaid">graph<\/div>');
  });

  it('convert PageContents returns script tag for mermaid.js, initialize mermaid script, and body closing tag', () => {
    const input = '</body>';
    const result = MermaidPlugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch('mermaid.initialize({');
    expect(result).toMatch('src="https://unpkg.com/mermaid@7.1.2/dist/mermaid.min.js"');
  });

  it('convert PageContents returns same value if body closing tag not exixt', () => {
    const input = 'hoge';
    const result = MermaidPlugin.convertPageContents(input);
    expect(result).toEqual('hoge');
  });
});
