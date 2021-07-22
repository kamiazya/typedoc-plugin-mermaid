import { Application } from 'typedoc/dist/lib/application';
import { MermaidPlugin } from './plugin';

export function load(PluginHost: Application): void {
  const app = PluginHost.owner;
  if (app.converter.hasComponent('mermaid')) {
    return;
  }

  /**
   * Add the plugin to the converter instance
   */
  app.converter.addComponent('mermaid', new MermaidPlugin(app.converter));
}
