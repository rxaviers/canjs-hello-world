[CanJS](http://canjs.com/) Hello World (plain js).

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
