/**
 * Hoge is sample class for example of `typedoc-plugin-mermaid`.
 *
 * @mermaid Make TypeDoc easy to use with mermaid.js
 * graph TB
 *   mermaid.js --> TypeDoc;
 */
export abstract class Hoge {

  /**
   * Alice says "Hello John, how are you?" to Jone,
   * then John says "Great!".
   *
   * @mermaid Alice greet to Jone
   * sequenceDiagram
   *     Alice->>John: Hello John, how are you?
   *     John-->>Alice: Great!
   */
  public aliceGreetingFlow() {
    console.log('Alice', 'Hello John, how are you?');
    console.log('John', 'Great!');
  }

  /**
   * Subgraphs.
   *
   * @mermaid Subgraphs Example
   * graph LR
   *   A[Hard edge] -->|Link text| B(Round edge)
   *   B --> C{Decision}
   *   C -->|One| D[Result one]
   *   C -->|Two| E[Result two]
   *
   * @mermaid Alice greet to Jone
   * sequenceDiagram
   *   Alice->>John: Hello John, how are you?
   *   John-->>Alice: Great!
   */
  public abstract multiGraphs(): void;
}
