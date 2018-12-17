<p align="center">
  <img src="https://raw.githubusercontent.com/nidkil/vue-lerna-test/master/public/vue-test-plugin-logo.png" alt="vue-lerna-test logo" width="200"/>
</p>
<p align="center" style="font-size: 2.0em"><b>vue-lerna-test</b></p>
<p align="center" style="font-size: 0.5em">A project to test Vue 2 with Lerna using a plugin and example application supporting SemVer and Conventional Commit standard</p>

[![Build status](https://travis-ci.com/nidkil/vue-lerna-test.svg?branch=master)](https://travis-ci.com/nidkil/vue-lerna-test)
[![Coverage Status](https://coveralls.io/repos/github/nidkil/vue-lerna-test/badge.svg)](https://coveralls.io/github/nidkil/vue-lerna-test)
[![Vue 2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Vue CLI 3](https://img.shields.io/badge/vue%20cli-3-brightgreen.svg)](https://cli.vuejs.org/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Hit count](http://hits.dwyl.com/nidkil/vue-lerna-test.svg)](http://hits.dwyl.com/dwyl/start-here)
[![License MIT](https://img.shields.io/badge/license-mit-yellow.svg)](https://opensource.org/licenses/MIT)

> A project to test Vue 2 with Lerna using a plugin and example application supporting SemVer and Conventional Commit standard.

I am moving a number of projects to a monorepo setup. During this process I ran into some hiccups getting everything to work and build correctly. So I decided to setup a test repository to test the following:

1. Create a basic plugin that mounts the plugin on the Vue instances
2. Test the plugin with an example app in a separate package
3. Unit test the plugin
4. Build a production version of the plugin
5. Use SemVer and Conventional Commit standard including commitlint and release-it

Nothing to fancy, but it might be of help to others setting up a project for Vue with Lerna, so I will make it generally available. Enjoy!

<a name="toc">
  <details>
    <summary><strong>Table of Contents</strong> (click to expand)</summary>
      <!-- toc -->
  </details>
</a>

## Project setup

This project uses a monorepo setup. From the monorepo root run the following commands. The `npm install` command will trigger a post install hook that calls `lerna bootstrap --hoist`, which takes care of initializing the packages.

```
$ git clone https://github.com/nidkil/vue-lerna-test
$ cd vue-lerna-test
$ npm install
```

> **Tip*** For more information about Lerna go [here](https://github.com/lerna/lerna#readme).

### Compiles and hot-reloads for development

```
npm run serve:ui
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint:fix
```

### Run your unit tests

```
npm run test:unit
```

### Commit changes

```
npm run cz:commit
```

Or

```
git cz
```

[Go to Table of Contents](#toc)

## Roadmap

Currently there is nothing on the roadmap. Suggestions? Please submit an issue.

[Go to Table of Contents](#toc)

## Contributing

We welcome pull requests! What follows is the simplified version of the contribution process, please read [here](./CONTRIBUTING.md) to fully understand our contribution policy and [here](./CODE-OF-CONDUCT.md) to understand our code of conduct.

1. Fork the repository [here](https://github.com/nidkil/vue-lerna-test)!
2. Create your feature branch: `git checkout -b my-new-feature`
3. If relevant, don't forget to add your tests and comment your code
4. Commit your changes: `npm run commit`
5. Push the branch: `git push origin my-new-feature`
6. Submit a pull request :-)

[Go to Table of Contents](#toc)

## Support & brag about us

If you like this project, please support us by starring ⭐ [this](https://github.com/nidkil/vue-lerna-test) repository. Thx!

Please let the world know about us! Brag about us using Twitter, email, blog, Discord, Slack, forums, etc. etc. Thx!

[Go to Table of Contents](#toc)

## Author

**nidkil** © [nidkil](https://github.com/nidkil), released under the [MIT](./LICENSE.md) license.
Authored and maintained by nidkil with help from [contributors](https://github.com/nidkil/vue-lerna-test/contributors).

> [Website](https://nidkil.me) · GitHub [@nidkil](https://github.com/nidkil) · Twitter [@nidkil](https://twitter.com/nidkil)
