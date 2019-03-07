
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';


/**
 * Mermaid plugin component.
 */
@Component({ name: 'mermaid' })
export class MermaidPlugin extends ConverterComponent {

  /**
   * listen to event on initialisation
   */
  public initialize() {
  }

}
