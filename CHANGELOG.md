# typedoc-plugin-mermaid

## 1.11.1

### Patch Changes

- [#859](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/859) [`2683809`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/26838095b3732860dfdf594c6f77583b19a04090) Thanks [@kamiazya](https://github.com/kamiazya)! - Fix to download before publish

## 1.11.0

### Minor Changes

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Explicitly state that Node.js 16 or higher should be guaranteed to work with the latest TypeDoc

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Update CI/CD Workflow

### Patch Changes

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Add Dependabot setting for GitHub Actions

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Migrate formater and linter to biome from eslint and prettier

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Add "provenance" flag to publishConfig in package.json

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Add typecheck script for TypeScript type checking

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Introduce Changeset.

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Bump vite from 5.2.13 to 5.3.0

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Migrate package manager to pnpm from yarn

  - Setup pnpm workspace and ignore "example" in Changeset configuration

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Bump @types/html-escaper from 3.0.0 to 3.0.2

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Update package.json exports

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Update README for TypeDoc 0.24 and 0.25

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Migrate build and test tool to vite/vitest from rollup/jest

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Add GitHub workflow to update copyright year in license file

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Add Snapshot release workflows

  - New Features
    - Introduced snapshot release automation for pull requests using GitHub Actions.
    - Added new GitHub Action to perform snapshot releases based on specific comments.
    - Implemented a prerelease job in CI/CD workflow for automated next version releases.
  - Improvements
    - Added new configuration options for snapshots to support pre-release templates and calculated versions.
    - Improved GitHub Actions setup with an option to skip the checkout step for better performance.
  - Automation
    - Enhanced workflow automation including permission checks, artifact handling, and snapshot release validation.

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Bump actions/checkout from 4.1.6 to 4.1.7

- [#857](https://github.com/kamiazya/typedoc-plugin-mermaid/pull/857) [`9a5db15`](https://github.com/kamiazya/typedoc-plugin-mermaid/commit/9a5db15c47ac5e4b2647bd5b4efbace6358d06bd) Thanks [@kamiazya](https://github.com/kamiazya)! - Update dependencies and configuration files
