# GitHub Action to run PHP Insights


## Overview

This action runs [PHP Insights](https://github.com/nunomaduro/phpinsights).


## Usage

Add a file like this to `.github/workflows/phpinsights.yml`:

```yml
name: "CI"

on:
  push:
    paths:
      - "**.php"
      - ".github/workflows/phpinsights.yml"
  pull_request:
    paths:
      - "**.php"
      - ".github/workflows/phpinsights.yml"

jobs:
  phpinsights:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0 # important!

      - name: Install PHP Insights
        run: |
          curl -OL https://getcomposer.org/download/latest-2.x/composer.phar
          php composer.phar global require nunomaduro/phpinsights
          php composer.phar clearcache -q
          php ~/.composer/vendor/bin/phpinsights --version

      - uses: Novusvetus/action-phpinsights@1.0.0
        with:
          files: "**.php"
          phpinsights_path: "php ~/.composer/vendor/bin/phpinsights"
          min_quality: 90
          min_complexity: 90
          min_architecture: 90
          min_style: 90
```

## License ##
3-clause BSD license
See [License](LICENSE)


## Bugtracker ##
Bugs are tracked in the issues section of this repository on GitHub.
Please read over existing issues before submitting an issue to ensure yours is unique.

[Create a new issue](../../issues/new)
 - Describe the steps to reproduce your issue.
 - Describe the expected and the actual outcome.
 - Describe your environment as detailed as possible.


## Development and contribution ##
Feature requests can also be made by [creating a new issue](../../issues/new).
If you would like to make contributions to this repository, feel free to [create a fork](../../fork) and submit a pull request.


## Links ##
* [ReindeerWeb](https://www.reindeer-web.de)
* [Novusvetus](https://www.novusvetus.de)
* [License](./LICENSE)
* [Contributing](./CONTRIBUTING.md)
