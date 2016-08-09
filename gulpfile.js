var elixir = require('laravel-elixir')
var standard = require('gulp-standard')
var gulp = require('gulp')
var del = require('del')

gulp.task('standard', function () {
  return gulp.src(
    [
      'resources/assets/js/**/*'
    ])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('clean:assets', function () {
  return del([
    'public/js/**/*',
    'public/css/**/*',
    'public/build/**/*'

  ])
})

elixir(function (mix) {
  mix.task('clean:assets')
  mix.task('standard')
  mix.browserify('app.js', './dist')
})
