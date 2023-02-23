import gulp from 'gulp'
import concat from 'gulp-concat'
import minifyCSS from 'gulp-minify-css'
import uglify from 'gulp-uglify'
import gulpSass from 'gulp-sass'
import nodeSass from 'node-sass'
const sass = gulpSass(nodeSass)

gulp.task('sass', () => {
  return gulp.src(['./src/style/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'))
})

gulp.task('scripts', () => {
  return gulp.src('src/js/**/*.js')
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
})

gulp.task('copy', () => {
  return gulp.src([
    'src/assets/**/*.jpg',
    'src/assets/**/*.png',
    'src/assets/*.webp',
  ])
  .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  gulp.watch('src', gulp.series('sass', 'scripts', 'copy'))
})

export default gulp.series['sass', 'scripts', 'copy']