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
    expect(result).toMatch('<div class="mermaid">graph<\/div>');
  });

  it('convert PageContents returns script tag for mermaid.js, initialize mermaid script, and body closing tag', () => {
    const input = '</body>';
    const result = plugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch('mermaid.initialize({');
    expect(result).toMatch(/src="https:\/\/unpkg.com\/mermaid@[\d|.]+\/dist\/mermaid.min.js"/);
  });

  it('can be change mermaid.js version when set \'mermaidVersion\' option', () => {
    plugin.application.options.setValue('mermaidVersion', '0.0.0');

    const input = '</body>';
    const result = plugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch('mermaid.initialize({');
    expect(result).toMatch(/src="https:\/\/unpkg.com\/mermaid@0\.0\.0\/dist\/mermaid.min.js"/);
  });

  it('load mermaid.js@7.1.2 when not to set \'mermaidVersion\' option', () => {
    const input = '</body>';
    const result = plugin.convertPageContents(input);
    expect(result).toMatch('</body>');
    expect(result).toMatch('mermaid.initialize({');
    expect(result).toMatch('src="https://unpkg.com/mermaid@7.1.2/dist/mermaid.min.js"');
  });

  it('convert PageContents returns same value if body closing tag not exixt', () => {
    const input = 'hoge';
    const result = plugin.convertPageContents(input);
    expect(result).toEqual('hoge');
  });
});
