var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('default', () => {
  return gulp.src('./bootstrap-grid.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./output'))
})
