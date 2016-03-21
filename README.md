# Saiku React Starter [![Build Status](https://travis-ci.org/OSBI/saiku-react-starter.svg?branch=master)](https://travis-ci.org/OSBI/saiku-react-starter)

A template for writing React Apps based ECMAScript 2015 (ES6) app using webpack, Browsersync, Gulp and more.

## Getting started

In order to run it locally you'll need a basic server setup.

1. Clone this repo using:

  ```
  $ git clone git@github.com:OSBI/saiku-react-starter.git
  ```

2. Install [NodeJS](https://nodejs.org/en/download/) and [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally), if you don't have it yet.

3. Delete the existing git repository by running:

  ```
  $ rm -rf .git
  ```

4. Initialize a new git repository with:

  ```
  $ git init
  $ git add .
  $ git commit -m "Initial commit"
  ```
  
5. Install Dependencies:
  
  ```
  $ npm install
  ```

6. Serve it:

  ```
  $ npm run dev
  ```

7. Run tasks with Gulp:

  ```
  $ gulp
  ```

8. Execute tests (optional):

  ```
  $ npm test
  ```

## Documentation

Documentation [Saiku React Starter](http://osbi.github.io/saiku-react-starter/).

## Usage

- Run `npm run build` to build the project;
- Run `npm run clean` Clean `resources` folder;
- Run `npm run dev` to build the project, start watching files and run the local server;
- Run `npm run docs` to generate the documentation the code;
- Run `npm test` to run the tests once;
- Run `npm run test:ci` to watch the `src` directory for changes and run the tests.

## Tasks

- `gulp`: Initialize stylus and watch for changes;
- `gulp bower-install`: Move dependencies to folder `dist/assets/`;
- `gulp deploy-pages`: Deploy documentation files to `github` on branch gh-pages;
- `gulp imagemin`: Compress image files;
- `gulp stylus`: Compile stylus files;
- `gulp watch`: Call for watch files.

## Contributing

If you want to help, please read the [Contributing](https://github.com/OSBI/saiku-react-starter/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/OSBI/saiku-react-starter/releases).

## License

Saiku and the Saiku UI are free software. The UI, contained in this repository,
is available under the terms of the Apache License Version 2. A copy is attached for your convenience.
