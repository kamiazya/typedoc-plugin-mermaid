import { Application } from 'typedoc';
import { MermaidPlugin } from '../src/plugin';

const app = new Application({});
const plugin = new MermaidPlugin(app.converter);

describe('MermaidPlugin e2e', () => {
  it('onBegin not to throw Exeption', () => {
    const contexts: any[] = [
      {
        project: {
          reflections: {
            1: {
              comment: {
                tags: [
                  {
                    paramName: '',
                    tagName: 'mermaid',
                    text: 'aaa',
                  },
                ],
              },
            },
          },
        },
      },
      {
        project: {
          reflections: {
          },
        },
      },
      {
        project: {
          reflections: {
            1: { },
          },
        },
      },
      {
        project: {
          reflections: {
            1: {
              comment: { },
            },
          },
        },
      },
    ];

    contexts
      .forEach(context =>
        expect(() => plugin.onBegin(context)).not.toThrow());
  });

  it('onPageEnd not to throw Exeption', () => {
    const pageEvents: any[] = [
      { contents: '' },
      { },
    ];

    pageEvents
      .forEach(pageEvent =>
        expect(() => plugin.onPageEnd(pageEvent)).not.toThrow());
  });
});
