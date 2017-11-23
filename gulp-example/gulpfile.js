var gulp   = require('gulp');
var sass = require('gulp-sass');
var del    = require('del');

var paths = {
    scss : 'assets/scss/app.scss'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function () {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del(['dist']);
});

gulp.task('scss', ['clean'], function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.scss, ['scss']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scss']);