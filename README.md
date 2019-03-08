[![Build Status](https://travis-ci.org/kamiazya/typedoc-plugin-mermaid.svg?branch=master)](https://travis-ci.org/kamiazya/typedoc-plugin-mermaid) [![CodeFactor](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid/badge)](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid) [![npm version](https://badge.fury.io/js/typedoc-plugin-mermaid.svg)](https://badge.fury.io/js/typedoc-plugin-mermaid) [![Maintainability](https://api.codeclimate.com/v1/badges/827855fa3daba03076b4/maintainability)](https://codeclimate.com/github/kamiazya/typedoc-plugin-mermaid/maintainability) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_shield) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![typedoc-plugin-mermaid Dev Token](https://badge.devtoken.rocks/typedoc-plugin-mermaid)](https://devtoken.rocks/package/typedoc-plugin-mermaid) [![BCH compliance](https://bettercodehub.com/edge/badge/kamiazya/typedoc-plugin-mermaid?branch=master)](https://bettercodehub.com/)

# typedoc-plugin-mermaid

A plugin for TypeDoc that generates graphs for mermaid.js diagrams by @mermaid annotation.

## Usage

Write tsdoc with `@mermaid` annotation

```typescript
/**
 * Hoge is sample class for example of `typedoc-plugin-mermaid`.
 *
 * @mermaid Make TypeDoc easy to use with mermaid.js
 * graph TB
 *   mermaid.js --> TypeDoc;
 */
export class Hoge {
}

```

[↓↓ DEMO ↓↓](https://kamiazya.github.io/typedoc-plugin-mermaid/classes/hoge.html)

[![Example](./media/example.png)](https://kamiazya.github.io/typedoc-plugin-mermaid/classes/hoge.html)

## Installation

The plugin can then be installed using [npm](https://www.npmjs.com/):

[![NPM](https://nodei.co/npm/typedoc-plugin-mermaid.png)](https://nodei.co/npm/typedoc-plugin-mermaid/)

### npm

```sh
npm install --save-dev typedoc-plugin-mermaid
```

### yarn

```sh
yarn add -D typedoc-plugin-mermaid
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_large)
