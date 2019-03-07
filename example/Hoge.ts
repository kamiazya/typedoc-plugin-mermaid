/**
 * Hoge is sample class for example of `typedoc-plugin-mermaid`.
 *
 * @mermaid
 * graph TB
 *   mermaid.js --> TypeDoc;
 */
export class Hoge {

  /**
   *
   * @mermaid
   * graph LR
   *   A --- B
   *   B-->C[fa:fa-ban forbidden]
   *   B-->D(fa:fa-spinner);
   */
  public exampleForGraphLR() {
    console.log('graphLR');
  }
}
