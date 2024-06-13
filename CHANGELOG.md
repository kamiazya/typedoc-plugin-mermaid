# typedoc-plugin-mermaid

## 1.11.0

### Minor Changes

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Explicitly state that Node.js 16 or higher should be guaranteed to work with the latest TypeDoc

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Update CI/CD Workflow

### Patch Changes

- [#848](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/848) [`6cfbec8`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/6cfbec81afb69d6b194b5412e952a9a252765a7c) Thanks [@kamiazya](https://github.com/kamiazya)! - Add Dependabot setting for GitHub Actions

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Migrate formater and linter to biome from eslint and prettier

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Add "provenance" flag to publishConfig in package.json

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Add typecheck script for TypeScript type checking

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Introduce Changeset.

- [#855](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/855) [`e6a50a8`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/e6a50a8d026d5d65b37adba9592a14ae726ab585) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump vite from 5.2.13 to 5.3.0

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Migrate package manager to pnpm from yarn

  - Setup pnpm workspace and ignore "example" in Changeset configuration

- [#850](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/850) [`1bd966a`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/1bd966a578c41b0ff294dd166d12bfbab22b5369) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump @types/html-escaper from 3.0.0 to 3.0.2

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Update package.json exports

- [#856](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/856) [`72cb8ae`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/72cb8ae2db77cfe65618743d692e1758f5e258ec) Thanks [@kamiazya](https://github.com/kamiazya)! - Update README for TypeDoc 0.24 and 0.25

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Migrate build and test tool to vite/vitest from rollup/jest

- [#849](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/849) [`201c620`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/201c6202bcbecd33170841fe99e0ae80037127c4) Thanks [@kamiazya](https://github.com/kamiazya)! - Add GitHub workflow to update copyright year in license file

- [#853](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/853) [`0e81ccd`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/0e81ccd9b13f2db6a4928955785791fea6fceb0e) Thanks [@kamiazya](https://github.com/kamiazya)! - Add Snapshot release workflows

  - New Features
    - Introduced snapshot release automation for pull requests using GitHub Actions.
    - Added new GitHub Action to perform snapshot releases based on specific comments.
    - Implemented a prerelease job in CI/CD workflow for automated next version releases.
  - Improvements
    - Added new configuration options for snapshots to support pre-release templates and calculated versions.
    - Improved GitHub Actions setup with an option to skip the checkout step for better performance.
  - Automation
    - Enhanced workflow automation including permission checks, artifact handling, and snapshot release validation.

- [#851](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/851) [`58ac7bc`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/58ac7bc6c9ce732883e1dd4ebcf2a9b779f0d74e) Thanks [@dependabot](https://github.com/apps/dependabot)! - Bump actions/checkout from 4.1.6 to 4.1.7

- [#846](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/846) [`b5f14d9`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/b5f14d916cf97275a589b5d49cac89f6c3f8a9f1) Thanks [@kamiazya](https://github.com/kamiazya)! - Update dependencies and configuration files
