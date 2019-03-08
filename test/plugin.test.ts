import { MermaidPlugin } from '../src/plugin';

describe('MermaidPlugin', () => {
  it('convert CommentTag', () => {
    const input = 'title\ngraph';
    const result = MermaidPlugin.convertCommentTagText(input);
    expect(result).toMatch('#### title');
    expect(result).toMatch('<div class="mermaid">graph<\/div>');
  });

  it('convert PageContents', () => {
    const input = '</body>';
    const result = MermaidPlugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch('mermaid.initialize({');
    expect(result).toMatch('src="');
  });
});
