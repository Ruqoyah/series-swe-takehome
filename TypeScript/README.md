# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## Getting started

Install dependencies

```sh
npm install
```

## Running app
_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Running tests

To run all tests

### Jest way

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

### Mocha way

```sh
npm run test:mocha
```

### Tasks
- [x] Update README
- [x] Write/Update tests for update item quality feature.
- [x] Refactor updateQuality method so it can be more clean, reusable and easy to add new features in future.
    - Create a separate class called ItemQualityManagement, then make GildedRose extend the class.
