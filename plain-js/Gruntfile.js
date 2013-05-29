module.exports = function(grunt) {

"use strict";

var externalJsFiles = [
  "external/jquery/jquery.js",
  "external/canjs/can.jquery.js"
];

var externalCssFiles = [
  "external/bootstrap/docs/assets/css/bootstrap.css",
  "external/bootstrap/docs/assets/css/bootstrap-responsive.css"
];

var jsFiles = [
  "**/*.js",
  "!Gruntfile.js",
  "!node_modules/**",
  "!external/**",
  "!dist/**"
];

var cssFiles = [
  "**/*.css",
  "!node_modules/**",
  "!external/**",
  "!dist/**"
];

grunt.initConfig({
  pkg: grunt.file.readJSON("package.json"),
  jshint: {
    options: {
      jshintrc: ".jshintrc"
    },
    app: jsFiles
  },
  csslint: {
    app: cssFiles
  },
  uglify: {
    app: {
      src: jsFiles,
      dest: "dist/app.min.js"
    },
    external: {
      src: externalJsFiles,
      dest: "dist/external.min.js"
    }
  },
  cssmin: {
    external: {
      src: externalCssFiles,
      dest: "dist/external.min.css"
    }
  }
});

grunt.loadNpmTasks("grunt-contrib-csslint");
grunt.loadNpmTasks("grunt-contrib-cssmin");
grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-contrib-uglify");

grunt.registerTask("dist", function() {
  grunt.file.mkdir("dist");
});

grunt.registerTask("lint", ["jshint", "csslint"]);

grunt.registerTask("default", [
  /* Setup */
  "dist",

  /* Minify js'es and css'es */
  "uglify", "cssmin"
]);

};
