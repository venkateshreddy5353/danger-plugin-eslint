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
