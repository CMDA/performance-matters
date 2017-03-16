const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const critical = require('critical');

//Images compression
gulp.task('default', () =>
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/img'))
);

//Critical CSS
gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('cssCritical', () => {
	const htmlPage = fs.readFileSync('./src/index.html');
	critical.generate({
		inline: false,
		base: './',
		html: htmlPage,
    minify: true,
		src: './src/_base/layout.html',
		css: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', './src/dist/css/docs.css'],
		dest: './src/dist/css/critical.css',
		width: 1920,
		height: 1080
	});
});
