import { Application } from 'typedoc';
import { MermaidPlugin } from './plugin';

export function load(app: Application): void {
  new MermaidPlugin().addToApplication(app);
}
