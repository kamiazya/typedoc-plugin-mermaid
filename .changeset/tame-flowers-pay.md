---
"typedoc-plugin-mermaid": patch
---

Add Snapshot release workflows

- New Features
  - Introduced snapshot release automation for pull requests using GitHub Actions.
  - Added new GitHub Action to perform snapshot releases based on specific comments.
  - Implemented a prerelease job in CI/CD workflow for automated next version releases.
- Improvements
  - Added new configuration options for snapshots to support pre-release templates and calculated versions.
  - Improved GitHub Actions setup with an option to skip the checkout step for better performance.
- Automation
  - Enhanced workflow automation including permission checks, artifact handling, and snapshot release validation.
