Thanks for showing interest to contribute to Celeste UI 💖, you rock!

When it comes to open source, there are different ways you can contribute, all
of which are valuable. Here's a few guidelines that should help you as you
prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Celeste UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/meretamal/celeste-ui))

2. Clone your fork locally

```sh
git clone git@github.com:<your-username>/celeste-ui.git
cd celeste-ui
```

3. Setup all the dependencies and packages by running `yarn install`. This
   command will install dependencies.

## Development

To improve our development process, we've set up tooling and systems.

### Tooling

- [Yarn](https://yarnpkg.com/) to manage packages and dependencies
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Eslint](https://eslint.org/) + [Prettier](https://prettier.io/) to maintain a standard syntax

### Commands

**`yarn storybook`**: starts storybook server and loads stories in files that
end with `.stories.tsx`.

**`yarn build`**: run build for all component packages.

**`yarn lint`**: check for eslint offences.

**`yarn lint:fix`**: check and fix eslint offences.

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction
with a code example. The best way to show a bug is by sending a CodeSandbox
link.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when
the PR author is a collaborator, that counts as one.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the celeste-ui repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/meretamal/celeste-ui/blob/main/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `yarn build` to make sure everything works as expected.

### Tests

TBD

## Want to help improve the docs?

TBD

## License

By contributing your code to the celeste-ui GitHub repository, you agree to
license your contribution under the MIT license.
