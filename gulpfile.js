'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    // minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync');

// live reload for multiple devices
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./_html/"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// compile, add prefixes, and minify scss styles
gulp.task('styles', function(){
  gulp.src(['src/scss/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/css/'))
    // COMMENT OUT MINIFICATION TASKS UNTIL PRODUCTION!!!
    // .pipe(rename({suffix: '.min'}))
    //.pipe(minifycss())
    //.pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({stream:true}))
});

// concatenate and minify js
gulp.task('scripts', function(){
  return gulp.src('src/js/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js/'))
    // COMMENT OUT MINIFICATION TASKS UNTIL PRODUCTION!!!
    // .pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    //.pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({stream:true}))
});

// optimize images
gulp.task('images', function(){
  gulp.src('src/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img/'));
});

// fire live reload while watching these tasks
gulp.task('default', ['browser-sync'], function(){
  gulp.watch("src/scss/*.scss", ['styles']);
  gulp.watch("src/scss/**/*.scss", ['styles']);
  gulp.watch("src/js/*.js", ['scripts']);
  gulp.watch("_html/*.html", ['bs-reload']);
});
