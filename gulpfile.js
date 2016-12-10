var gulp = require('gulp'),
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	livereload = require('gulp-livereload'),
	pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('less', function () {
    gulp.src('dev/css/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    gulp.src('dev/js/**/*.js')
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('img', function () {
    gulp.src('dev/img/**/*')
    .pipe(imagemin({
        progressive: true,
        use: [pngquant()] //使用pngquant来压缩png图片
    }))
    .pipe(gulp.dest('dist/img'));
});


gulp.task('default',function(){
	gulp.run(['less','js','img']);
  	gulp.watch('dev/css/**/*.less', ['less']);
  	gulp.watch('dev/js/**/*.js', ['js']);
  	gulp.watch('dev/img/**/*', ['img']);
});