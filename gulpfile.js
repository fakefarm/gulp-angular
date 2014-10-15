var gulp       = require('gulp'),
    coffee     = require('gulp-coffee'),
    gutil      = require('gulp-util'),
    uglify     = require('gulp-uglify'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr         = require('tiny-lr'),
    server     = lr(),
    watch      = require('gulp-watch'),
    requireDir = require('require-dir');

gulp.task('sass', function(){
  gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src'));
});

gulp.task('coffee', function(){
  gulp.src('app/coffee/*.coffee')
  .pipe(coffee({ bare: true })
    .on('error', gutil.log))
  .pipe(concat('script.js'))
  .pipe(gulp.dest('src'));
});

gulp.task('watch', function(){
  var server = livereload();
  gulp.watch('build/scss/*.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'coffee', 'watch']);
