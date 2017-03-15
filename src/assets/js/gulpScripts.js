const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


//Images compression
gulp.task('default', () =>
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/img'))
);
