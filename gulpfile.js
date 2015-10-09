var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');

// sass task
// compile
// compress
gulp.task('styles', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

// custom scripts task
// uglifies
gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

// watch tasks
// live reload
// watch scss
// watch js
gulp.task('watch', function() {

    // live reload
    var server = livereload({ start: true });

    // watch these tasks
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
});

// gulp runs all your tasks
gulp.task('default', [
    'styles',
    'scripts',
    'watch'
]);
