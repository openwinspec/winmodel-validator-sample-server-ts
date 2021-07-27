## Description

[OpenWinSpec](https://github.com/openwinspec) sample server for model json validation.

## Prerequisites

[Node JS](https://nodejs.org) v.14.17.2

[NPM](https://www.npmjs.com/package/npm) v.7.19.0

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Usage

Make POST request to localhost:3000 with Body raw JSON

```json
{
    "model": {
        "openwinversion": "2.0.0",
        "info": { "id": "3dfc8657-c2dc-450f-8d4c-017b85d25af7", "locale": "RU" },
        ...
    }
}
```

OpenWinSpec is [MIT licensed](LICENSE).
