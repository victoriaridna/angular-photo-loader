'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var history = require('connect-history-api-fallback');
var serveStatic = require("serve-static");

gulp.task('serve', function () {
   return browserSync.init(null, {
        server: {
            baseDir: "app",
            middleware: [
                serveStatic('app', {extensions: ['html']}),
                history()
            ],
        },
        notify: false,
        open: false
    });
});