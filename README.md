This project aims to be a guide on how to organize your [CanJS](http://canjs.com/) project. So, you can:

- Include external libraries in a version controlled way using Bower;
- Build production concatenated+minified JS and CSS files using node.js/gruntjs;

## Requirements
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [Npm](https://npmjs.org/)

## Getting started

### Install

Install external dependencies.

    $ bower install

Install grunt

    $ npm install

### Development mode

Point your browser to `dev.html`. View your JS and CSS files as they are, ie. while you develop.

Want to make sure your code is linted?

    $ grunt lint

Lint is an alias task that actually runs both `jshint` and `csslint` for you.

### Production mode

Ready to distribute your app? Build the mifified files.

    $ grunt

The following files will be created.

```
dist/
  |-- app.min.js
  |-- external.min.css
  \-- external.min.js
```

Point your browser to `prod.html` and see.
