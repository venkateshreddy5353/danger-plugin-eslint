## [3.0.2](https://github.com/sgtcoolguy/danger-plugin-eslint/compare/v3.0.1...v3.0.2) (2022-01-27)


### Bug Fixes

* generate types during typescript build ([#160](https://github.com/sgtcoolguy/danger-plugin-eslint/issues/160)) ([e4a373d](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/e4a373d95db4133f454509eb7a9442d6b4fd2f79))

## [3.0.1](https://github.com/sgtcoolguy/danger-plugin-eslint/compare/v3.0.0...v3.0.1) (2021-10-21)


### Bug Fixes

* correct filtering out files that dont match suggested extensions ([dd32cb0](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/dd32cb0118e92630af4926a03b0e305190268d46))

# [3.0.0](https://github.com/sgtcoolguy/danger-plugin-eslint/compare/v2.0.0...v3.0.0) (2021-10-18)


* feat!: support eslint 8 ([e98058f](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/e98058f594faf2ccc1e887e704c2a8d9f30eca84))


### BREAKING CHANGES

* Drop support for versions older than eslint 8

# [2.0.0](https://github.com/sgtcoolguy/danger-plugin-eslint/compare/v1.0.0...v2.0.0) (2020-07-14)


### Bug Fixes

* convert configs passed in as strings to an object ([deb15e2](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/deb15e2c6dc82f4ee3f58c6c1d3877e9e91d715e))
* Move esdoc from optionalDependencies to devDependencies and update to ^1.1.0 ([1c2adcb](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/1c2adcb8527d7bf17d3cba02eede1b808cdd41e3))
* use options.extensions instead of cli ([40fe300](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/40fe3004a869806c2d58d50beb0b579e93c46c05))


### Code Refactoring

* **deps:** make eslint a peerDepdency rather than direct dependency ([4b6753a](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/4b6753a333e7d73fa3cf2189bd06df0335165d32))


### Features

* filter set of changed files using eslint's ignore rules and file extensions to avoid attempting to lint intentionally ignore files or non JS file by default. Add optional argument to override the default set of file extensions to process. ([dd974ae](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/dd974ae7430013dcc6026c4d665788d07eda5fd6))
* Set file and line values when reporting eslint results to danger ([ae58ed8](https://github.com/sgtcoolguy/danger-plugin-eslint/commit/ae58ed8aadbb35fa39264487fadbe76460a39dc6))


### BREAKING CHANGES

* **deps:** eslint is now required to be installed by all users of the package rather than
relying on the plugin to provide it
