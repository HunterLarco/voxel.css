/* jshint strict: false, node: true */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var mincss = require('gulp-minify-css');
var addsrc = require('gulp-add-src');
var del = require("del");

gulp.task('clean', function(){
  del('dist/*');
});

gulp.task('dist', function(){
  gulp.src('./src/Interfaces/*.js')
    .pipe(addsrc('./src/Core/*.js'))
    .pipe(uglify())
    .pipe(concat('voxelcss.js'))
    .pipe(gulp.dest('./dist'));
  gulp.src('./src/voxel.css')
    .pipe(mincss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function(){
  return gulp.src('./src/*/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['build']);