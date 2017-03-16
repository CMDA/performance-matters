const gulp = require('gulp');
const webp = require('gulp-webp');

gulp.task('webp', () =>
    gulp.src('src/**/*.{jpg,png}')
        .pipe(webp())
        .pipe(gulp.dest('src/dist/img/'))
);
