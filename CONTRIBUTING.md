## Questions

If you have questions about implementation details, help or support, then please use our dedicated community forum at Github Discussions.

**PLEASE NOTE:** If you choose to instead open an issue for your question, your issue will be immediately closed and redirected to the forum.

## Reporting Issues

If you have found what you think is a bug, please file an issue.

**PLEASE NOTE:** Issues that are identified as implementation questions or non-issues will be immediately closed and redirected to Github Discussions.

## Suggesting New Features

If you are here to suggest a feature, first create an issue if it does not already exist. From there, we will discuss use-cases for the feature and then finally discuss how it could be implemented.

## Development

Before proceeding with development, ensure you match one of the following criteria:

- Fixing a small bug
- Fixing a larger issue that has been previously discussed and agreed-upon by maintainers
- Adding a new feature that has been previously discussed and agreed-upon by maintainers

## Development Workflow

- Fork this repository, we prefer the feat-\* branch name style
- Install projects dependencies and linkages by running `npm i`
- Implement your changes and tests
- To test in your own projects:
  - Build `npm run build`
  - Link the appropriate package eg. `npm link @salable/errors`
- Document your changes in the appropriate documentation website markdown pages
- Commit your work and open a pull request
- Submit PR for review

## Adding a new test

- Create a new test file in the `__tests__` directory
- Name it the example name in **kebab-case**
- Run test `npm run test` or watch mode `npm run test:watch` to check if the tests pass.
