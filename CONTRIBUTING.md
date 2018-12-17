# Contribution guidelines

First of all, thanks for thinking of contributing to this project! 👏

Contributions are **welcome** and will be fully **credited**.

## Code of conduct

This project has a [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Ways to contribute

- Blog or tweet about the project
- Improve documentation
- Fix a bug
- Implement a new feature
- Discuss potential ways to improve project
- Improve existing implementation, performance, etc.

## Questions

Feel free to open an issue with your question.

Please put some effort in requesting a new feature. If someone else is going to implement something, the least you can do is describe the feature in detail, and why it would be useful to others as well.

## File a bug

In case you've encountered a bug, please make sure:

- You are using the [latest version](https://github.com/nidkil/setup-os-repo/releases).
- You have read the [documentation](https://github.com/nidkil/setup-os-repo/blob/master/README.md) first, and double-checked your configuration.
- You have acknowledged from `--verbose` and `--debug` the errors are likely a bug in this project (and not coming from your environment or a dependency of this project).
- In your issue description, please include:
	- What you expected to see, and what happened instead.
	- Your operating system and other environment information by running `info`.
	- As much information as possible, such as the command and configuration used.
	- Interesting logs with `--verbose` and/or `--debug`.
	- All steps to reproduce the issue.
	- If possible provide a minimum [repo](https://github.com), [repl](https://repl.it) or [CodePen](https://codepen.io) that demonstrates the issue.

Please put some effort into describing a bug, as recreating and solving it costs a lot of effort.

## Pull requests

We accept contributions via Pull Requests on [Github](https://github.com/nidkil/setup-os-repo).

Please keep the following in mind:

- See below for instructions on how to set up the project on your machine.
- To match the existing code styling, use `npm run lint` before committing code.
- Make sure the tests pass (run `npm test`). Your changes probably deserve new tests as well.
- Remember that this project is cross-platform compatible (macOS, Windows, Linux), and that it runs in different versions of Node.

Somethings to keep in mind

- **Discuss first** - Always open an issue to discuss a pull request before starting work. This to insure you do not spend a lot of time implementing it and the pull request is not accepted because it does not fit in the scope of the project or philosophy.

- **Keep the same style** - eslint will automatically be run before committing.

    **Tip**: To pass lint tests easier use the `npm run lint:fix` command.

- **Add tests!** - Your contribution will not be accepted if it does not have accompanying tests.

- **Document your code** - Make sure it is easy for others to understand your code by documenting it. Believe me, it will also help you yourself when you need to fix a bug or add a feature after 6 months :-)

    **Tips**:
    - We follow the [JSDoc](http://usejsdoc.org/) conventions for documenting code
    - Add a comment block before classes
    - Add detailed document to methods and functions
    - Don't document the obvious

- **Document any change in behaviour** - Make sure the `README.md` and any other relevant documentation are kept up-to-date.

- **Consider our release cycle** - We follow [SemVer v2.0.0](http://semver.org/). Randomly breaking public APIs is not an option!

- **Create feature branches** - Don't ask us to pull from your master branch. Always create a separate branch for any change.

- **One pull request per feature** - If you want to do more than one thing, send multiple pull requests.

- **Send coherent history** - We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard for commit message and use tooling to simplify conforming with and enforcing the standard. Ensure you provide meaning full commit messages! Use the tooling that the project provides.

    **Tip**: To commit use the `npm run commit` command, this is an interactive commit command that ensures that the commit complies with the Conventional Commits standard.

## Set up the project on your machine

The following instructions help new contributors to get up and running as quickly as possible.

First fork the the project on [GitHub](https://github.com/nidkil/setup-os-repo).

Then clone the project locally:

```bash
git clone https://github.com/nidkil/setup-os-repo
cd setup-os-repo
npm install
```

Setup the upstream to the original repo to stay in sync with it:

```bash
# Copy the URI from the original repo you forked and use it here
$ git remote add upstream git://github.com/<forked-from-user>/<forked-from-repo>.git
$ git fetch upstream
```

Sync with the original repo:

```bash
# Execute the following command to do the actual sync, which is like a "git pull" meaning it does a fetch + merge
$ git merge upstream/master master
# Or better, replay your local work on top of the fetched branch, which is like a "git pull --rebase"
$ git rebase upstream/master
```

**Pro tip**: Always sync with the original repo before submitting a pull request to make sure your changes are working with the latest code base!

Verify the tests are passing:

```
npm test
```

Lint the project:

```
npm run lint
```

To make `setup-os-repo` globally available so you can run it on your (test) project(s):

```
npm link
```

**Happy coding**!

## License

Released under the [MIT](LICENSE.md) license.
