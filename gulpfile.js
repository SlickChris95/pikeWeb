var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default',['styles'],function(){
  gulp.watch('sass/**/**.scss',['styles']);
  gulp.watch('*.html').on('change',browserSync.reload);
  browserSync.init({
    server: './'
  });
});

gulp.task('styles',function(){
  gulp.src('sass/**/*.scss') // looks for .scss
    .pipe(sass().on('error',sass.logError))// sass into css
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./css')) // specifies final destination
    .pipe(browserSync.stream()) // auto-inject sass
});
