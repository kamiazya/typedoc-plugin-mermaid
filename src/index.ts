import { Application } from 'typedoc';
import { MermaidPlugin } from './plugin.js';

export function load(app: Application): void {
  new MermaidPlugin(app).initialize();
}
