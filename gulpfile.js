const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    return gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(livereload({start: true}));
});

gulp.task('autopref', () => {
    return gulp.src('css/**/*.css')
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('css/'))
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles', 'autopref']));

gulp.task('watch', () => {
    gulp.watch('sass/**/*.sass', (done) => {
        gulp.series(['clean', 'styles', 'autopref'])(done);
    });
});
