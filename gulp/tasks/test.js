var gulp = require('gulp');
var fb = require('gulp-fb');

var TimeOutInSeconds = 5;

gulp.task('unit-runner', function() {
    var js = paths.test.src;
    var dest = paths.outDir;
    return gulp.src(js, { read: false, base: './' })
        .pipe(fb.toFileList())
        .pipe(fb.generateRunner(paths.test.runner, dest, 'Cocos Test Suite', paths.test.lib))
        .pipe(gulp.dest(dest));
});

function test () {
    var qunit;
    try {
        qunit = require('gulp-qunit');
    }
    catch (e) {
        console.error('Please run "npm install gulp-qunit" before running "gulp test".');
        throw e;
    }
    return gulp.src('bin/qunit-runner.html', { read: false })
        .pipe(qunit({ timeout: TimeOutInSeconds }));
}

gulp.task('test', ['build-test', 'unit-runner'], test);
gulp.task('rerun-test', test);
