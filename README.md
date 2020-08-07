[![GitHub Action](https://github.com/kamiazya/typedoc-plugin-mermaid/workflows/Node%20CI/badge.svg)](https://github.com/kamiazya/typedoc-plugin-mermaid/actions?workflow=Node+CI) [![CodeFactor](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid/badge)](https://www.codefactor.io/repository/github/kamiazya/typedoc-plugin-mermaid) [![npm version](https://badge.fury.io/js/typedoc-plugin-mermaid.svg)](https://badge.fury.io/js/typedoc-plugin-mermaid) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_shield) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![typedoc-plugin-mermaid Dev Token](https://badge.devtoken.rocks/typedoc-plugin-mermaid)](https://devtoken.rocks/package/typedoc-plugin-mermaid) [![BCH compliance](https://bettercodehub.com/edge/badge/kamiazya/typedoc-plugin-mermaid?branch=master)](https://bettercodehub.com/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

[↓↓ DEMO ↓↓](https://kamiazya.github.io/typedoc-plugin-samples/classes/hoge.html)

[![Example](./media/example.png)](https://kamiazya.github.io/typedoc-plugin-samples/classes/hoge.html)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://blog.kamiazya.tech/"><img src="https://avatars0.githubusercontent.com/u/35218186?v=4" width="100px;" alt=""/><br /><sub><b>Yuki Yamazaki</b></sub></a><br /><a href="#ideas-kamiazya" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=kamiazya" title="Code">💻</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=kamiazya" title="Tests">⚠️</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=kamiazya" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bobkerns.typepad.com"><img src="https://avatars3.githubusercontent.com/u/1154903?v=4" width="100px;" alt=""/><br /><sub><b>Bob Kerns</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/issues?q=author%3ABobKerns" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://forivall.com"><img src="https://avatars1.githubusercontent.com/u/760204?v=4" width="100px;" alt=""/><br /><sub><b>Emily Marigold Klassen</b></sub></a><br /><a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=forivall" title="Code">💻</a> <a href="https://github.com/kamiazya/typedoc-plugin-mermaid/commits?author=forivall" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

This software is released under the MIT License, see [LICENSE](./LICENSE).

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkamiazya%2Ftypedoc-plugin-mermaid?ref=badge_large)
