# @public-js/eslint-plugin-node

[![Build](https://github.com/public-js/eslint-plugin-node/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/public-js/eslint-plugin-node/actions/workflows/build.yml)
[![Version](https://img.shields.io/npm/v/@public-js/eslint-plugin-node?style=flat)](https://www.npmjs.com/package/@public-js/eslint-plugin-node)
[![Downloads](https://img.shields.io/npm/dw/@public-js/eslint-plugin-node?style=flat)](https://www.npmjs.com/package/@public-js/eslint-plugin-node)
[![Size](https://packagephobia.com/badge?p=@public-js/eslint-plugin-node)](https://packagephobia.com/result?p=@public-js/eslint-plugin-node)

[![CodeQL](https://github.com/public-js/eslint-plugin-node/actions/workflows/codeql-analyze.yml/badge.svg?branch=main)](https://github.com/public-js/eslint-plugin-node/actions/workflows/codeql-analyze.yml)
[![Codacy](https://app.codacy.com/project/badge/Grade/7504c70368844fbfa9ecb33e9f4dd0b5)](https://app.codacy.com/gh/public-js/eslint-plugin-node/dashboard)
[![Codecov](https://codecov.io/gh/public-js/eslint-plugin-node/branch/main/graph/badge.svg?token=pmZ7gav5yZ)](https://codecov.io/gh/public-js/eslint-plugin-node)
[![Code Climate](https://api.codeclimate.com/v1/badges/b7309de3cab8f57f2c32/maintainability)](https://codeclimate.com/github/public-js/eslint-plugin-node/maintainability)

Tailored ESLint configurations

---

## Installing

Add the package to your project by running:

```shell
npm i -D @public-js/eslint-plugin-node
```

Add the following to your ESLint config or modify the existing properties:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    'plugin:@public-js/eslint-plugin-node/<config>',
  ],
  // ...
};
```

## Configs

- `imports` - predefined config for the `simple-import-sort` plugin
- `unicornCjsDefault` - predefined config for the `unicorn` plugin for CJS packages; new rules left untouched
- `unicornCjsOff` - predefined config for the `unicorn` plugin for CJS packages; new rules turned off by default
- `unicornEsmDefault` - predefined config for the `unicorn` plugin for ESM packages; new rules left untouched
- `unicornEsmOff` - predefined config for the `unicorn` plugin for ESM packages; new rules turned off by default

## Resources

- [Changelog](CHANGELOG.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

## License

MIT, [full license text](LICENSE).
Read more about it on [TLDRLegal](https://www.tldrlegal.com/license/mit-license).
