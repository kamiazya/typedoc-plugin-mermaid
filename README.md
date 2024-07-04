[![GitHub Action](https://github.com/kamiazya/typedoc-plugin-mermaid/workflows/Node%20CI/badge.svg)](https://github.com/kamiazya/typedoc-plugin-mermaid/actions?workflow=Node+CI)
[![CodeFactor](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid/badge)](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid)
[![npm version](https://badge.fury.io/js/typedoc-plugin-mermaid.svg)](https://badge.fury.io/js/typedoc-plugin-mermaid)
![node version](https://img.shields.io/node/v/typedoc-plugin-mermaid)
![npm](https://img.shields.io/npm/dm/typedoc-plugin-mermaid)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_shield)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![All Contributors](https://img.shields.io/github/all-contributors/kamiazya/typedoc-plugin-mermaid?color=ee8449)](#contributors)
[![format: Biome](https://img.shields.io/badge/format%20with-Biome-F7B911?logo=biome&style=flat)](https://biomejs.dev/)
[![test: Vitest](https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&style=flat)](https://vitest.dev/)
[![build: Vite](https://img.shields.io/badge/build%20with-Vite-646CFF?logo=vite&style=flat)](https://rollupjs.org/)

# typedoc-plugin-mermaid

A plugin for TypeDoc that generates graphs for mermaid.js diagrams by @mermaid annotation.

## Installation

The plugin can then be installed using [npm](https://www.npmjs.com/):

[![NPM](https://nodei.co/npm/typedoc-plugin-mermaid.png)](https://nodei.co/npm/typedoc-plugin-mermaid/)

```sh
# npm
npm install --save-dev typedoc-plugin-mermaid
# or yarn
yarn add -D typedoc-plugin-mermaid
```

Add this plugin in your `typedoc.json`:

```json
{
  "plugin": ["typedoc-plugin-mermaid"]
}
```

If you use the `@mermaid` tag in your tsdoc comments,
add `typedoc-plugin-mermaid/tsdoc.json` to the extends of tsdoc.json:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",
  "extends": [
    "typedoc-plugin-mermaid/tsdoc.json"
  ]
}
```

## Usage

Write tsdoc with `@mermaid` annotations:

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

Or use fenced code blocks:

```typescript
/**
 * Mermaid code blocks are automatically detect and converted.
 *
 * ```mermaid
 * graph TB
 *   mermaid.js --> TypeDoc;
 * ```
 */
export class Mermaid { }
```

[↓↓ DEMO ↓↓](https://kamiazya.github.io/typedoc-plugin-samples/classes/hoge.html)

[![Example](https://github.com/kamiazya/typedoc-plugin-mermaid/raw/main/media/example.png)](https://kamiazya.github.io/typedoc-plugin-samples/classes/hoge.html)

### Arguments

The following arguments can be used in addition to the default TypeDoc arguments.

```bash
$ typedoc --help
...
Options:
 --mermaidVersion            [Mermaid Plugin] The version of mermaid.js to use.
...
```

- `--mermaidVersion`

    Specify mermaid.js version to use.

    Default: `latest`, Example: `8.14.0`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://blog.kamiazya.tech/"><img src="https://avatars0.githubusercontent.com/u/35218186?v=4?s=100" width="100px;" alt="Yuki Yamazaki"/><br /><sub><b>Yuki Yamazaki</b></sub></a><br /><a href="#ideas-kamiazya" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=kamiazya" title="Code">💻</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=kamiazya" title="Tests">⚠️</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=kamiazya" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://bobkerns.typepad.com"><img src="https://avatars3.githubusercontent.com/u/1154903?v=4?s=100" width="100px;" alt="Bob Kerns"/><br /><sub><b>Bob Kerns</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/issues?q=author%3ABobKerns" title="Bug reports">🐛</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=BobKerns" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://forivall.com"><img src="https://avatars1.githubusercontent.com/u/760204?v=4?s=100" width="100px;" alt="Emily Marigold Klassen"/><br /><sub><b>Emily Marigold Klassen</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=forivall" title="Code">💻</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=forivall" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Dynacord"><img src="https://avatars.githubusercontent.com/u/15387304?v=4?s=100" width="100px;" alt="Mathieu Jalbert-Claveau"/><br /><sub><b>Mathieu Jalbert-Claveau</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/issues?q=author%3ADynacord" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/RunDevelopment"><img src="https://avatars.githubusercontent.com/u/20878432?v=4?s=100" width="100px;" alt="Michael Schmidt"/><br /><sub><b>Michael Schmidt</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=RunDevelopment" title="Code">💻</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=RunDevelopment" title="Tests">⚠️</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=RunDevelopment" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/azatoth"><img src="https://avatars.githubusercontent.com/u/146477?v=4?s=100" width="100px;" alt="Carl Fürstenberg"/><br /><sub><b>Carl Fürstenberg</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/issues?q=author%3Aazatoth" title="Bug reports">🐛</a> <a href="#infra-azatoth" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/WHenderson"><img src="https://avatars.githubusercontent.com/u/934094?v=4?s=100" width="100px;" alt="Will Henderson"/><br /><sub><b>Will Henderson</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=WHenderson" title="Code">💻</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/issues?q=author%3AWHenderson" title="Bug reports">🐛</a> <a href="#example-WHenderson" title="Examples">💡</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/guryanovev"><img src="https://avatars.githubusercontent.com/u/2764795?v=4?s=100" width="100px;" alt="guryanovev"/><br /><sub><b>guryanovev</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/issues?q=author%3Aguryanovev" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://thegiantbeast.tech"><img src="https://avatars.githubusercontent.com/u/31733?v=4?s=100" width="100px;" alt="Ricardo Ferreira"/><br /><sub><b>Ricardo Ferreira</b></sub></a><br /><a href="#ideas-thegiantbeast" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.manufacanalytics.com/"><img src="https://avatars.githubusercontent.com/u/25290212?v=4?s=100" width="100px;" alt="Maneet Goyal"/><br /><sub><b>Maneet Goyal</b></sub></a><br /><a href="#ideas-maneetgoyal" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.hka.de"><img src="https://avatars.githubusercontent.com/u/734334?v=4?s=100" width="100px;" alt="Juergen Zimmermann"/><br /><sub><b>Juergen Zimmermann</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/issues?q=author%3Ajuergenzimmermann" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/michal-kindl"><img src="https://avatars.githubusercontent.com/u/20546439?v=4?s=100" width="100px;" alt="Michal Kindl"/><br /><sub><b>Michal Kindl</b></sub></a><br /><a href="#a11y-michal-kindl" title="Accessibility">️️️️♿️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ludovic-muller.fr"><img src="https://avatars.githubusercontent.com/u/9420561?v=4?s=100" width="100px;" alt="Ludovic Muller"/><br /><sub><b>Ludovic Muller</b></sub></a><br /><a href="#a11y-ludovicm67" title="Accessibility">️️️️♿️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

This software is released under the MIT License, see [LICENSE](./LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_large)
