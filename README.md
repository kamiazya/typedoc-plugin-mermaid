[![GitHub Action](https://github.com/kamiazya/typedoc-plugin-mermaid/workflows/Node%20CI/badge.svg)](https://github.com/kamiazya/typedoc-plugin-mermaid/actions?workflow=Node+CI) [![CodeFactor](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid/badge)](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid) [![npm version](https://badge.fury.io/js/typedoc-plugin-mermaid.svg)](https://badge.fury.io/js/typedoc-plugin-mermaid) [![Maintainability](https://api.codeclimate.com/v1/badges/827855fa3daba03076b4/maintainability)](https://codeclimate.com/github/kamiazya/typedoc-plugin-mermaid/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/827855fa3daba03076b4/test_coverage)](https://codeclimate.com/github/kamiazya/typedoc-plugin-mermaid/test_coverage) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_shield) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![typedoc-plugin-mermaid Dev Token](https://badge.devtoken.rocks/typedoc-plugin-mermaid)](https://devtoken.rocks/package/typedoc-plugin-mermaid) [![BCH compliance](https://bettercodehub.com/edge/badge/kamiazya/typedoc-plugin-mermaid?branch=master)](https://bettercodehub.com/)

# typedoc-plugin-mermaid

A plugin for TypeDoc that generates graphs for mermaid.js diagrams by @mermaid annotation.

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
export class Hoge { }
```

[↓↓ DEMO ↓↓](https://kamiazya.github.io/typedoc-plugin-mermaid/classes/hoge.html)

[![Example](./media/example.png)](https://kamiazya.github.io/typedoc-plugin-mermaid/classes/hoge.html)

## Additional Options

### Example: If you want to use `mermaid.js@8.0.0`

#### Set version by CLI

Add `-mmv/--mermaidVersion 8.0.0` option.

```bash
$ typedoc --plugin typedoc-plugin-mermaid --mermaidVersion 8.0.0
or
$ typedoc --plugin typedoc-plugin-mermaid -mmv 8.0.0
```

#### Set version by `typedoc.json`

Add `vermaidVersion` config to `typedoc.json`.

```json
{
  "mode": "file",
  "out": "../docs",
  "vermaidVersion": "8.0.0"
}
```

### Help

```bash
$ typedoc --plugin typedoc-plugin-mermaid -h
Loaded plugin typedoc-plugin-mermaid
Usage:
 typedoc --mode modules --out path/to/documentation path/to/sourcefiles

TypeDoc options:
...

 -mmv, --mermaidVersion    Mermaid Plugin: Version of mermaid.js.

...

TypeScript options:
See https://www.typescriptlang.org/docs/handbook/compiler-options.html
```

## License

This software is released under the MIT License, see LICENSE.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_large)

## Author

[kamiazya(Yuki Yamazaki)](https://github.com/kamiazya)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W5VDNO)
