import { Application } from 'typedoc/dist/lib/application';
import { MermaidPlugin } from './plugin';

export default (PluginHost: Application) => {
  const app = PluginHost.owner;
  if (app.converter.hasComponent('mermaid')) {
    return;
  }

  /**
   * Add the plugin to the converter instance
   */
  app.converter.addComponent('mermaid', new MermaidPlugin(app.converter));
};
