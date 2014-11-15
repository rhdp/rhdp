var gulp = require('gulp'),
	watch = require('gulp-watch'),
	stylus = require('gulp-stylus'),
	uglify = require('gulp-uglify'),
	lazy = require('lazypipe'),

	templatizer = require('templatizer'),

	tplSrc = './client/tpl/',
	tplMatch = tplSrc + '**/*.jade',
	tplDest = './public/js/',
	tplFile = tplDest + 'templates.js',

	jsSrc = './client/js/',
	jsMatch = jsSrc + '**/*.js',
	jsDest = './public/js/',

	cssSrc = './client/css/',
	cssMatch = cssSrc + '**/*.styl',
	cssDest = './public/css/',

	compose = {
		tpl: lazy()
			.pipe(uglify)
			.pipe(gulp.dest, tplDest),
		js: lazy()
			.pipe(uglify)
			.pipe(gulp.dest, jsDest),
		css: lazy()
			.pipe(stylus, {
				compress: true
			})
			.pipe(gulp.dest, cssDest)
	};

gulp.task('default', ['compile', 'watch'], function() {

});

gulp.task('compile', ['js', 'css', 'tpl'], function() {

});

gulp.task('watch', ['jsw', 'cssw', 'tplw'], function() {

});

gulp.task('js', function() {
	gulp.src(jsMatch).pipe(compose.js());
});

gulp.task('css', function() {
	gulp.src(cssMatch).pipe(compose.css());
});

gulp.task('tpl', function() {
	templatizer(tplSrc, tplFile);
	gulp.src(tplFile).pipe(compose.tpl());
});

gulp.task('jsw', function() {
	watch(jsMatch, function(files, next) {
		files.pipe(compose.js());
		next();
	});
});

gulp.task('cssw', function() {
	watch(cssMatch, function(files, next) {
		files.pipe(compose.css());
		next();
	});
});

gulp.task('tplw', function() {
	watch(tplMatch, function(files, next) {
		gulp.start('tpl');
		next();
	});
});
