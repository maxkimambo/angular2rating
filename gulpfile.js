var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell'),
    traceur = require('gulp-traceur'),
    webserver = require('gulp-webserver'), 
    clean = require('gulp-clean'); 

// run init tasks
gulp.task('default', ['dependencies', 'ts', 'js', 'html', 'css', 'images', 'copy']);

// run development task
gulp.task('dev', ['watch', 'serve']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

// clean build dir 
gulp.task('clean', function(){
  return gulp.src('build/**/*', {read: false})
    .pipe(clean({force: true}))
}); 

// watch for changes and run the relevant task
gulp.task('watch', function () {
   gulp.watch('src/**/**/*.ts', ['ts']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/**/*.jpg', ['images']); 
  gulp.watch('src/fonts/*', ['copy']); 
});

// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/*.js'
  ])
    .pipe(gulp.dest('build/lib'));
});

// transpile & move js
gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});

// transpile & move typescript
gulp.task('ts', function () {
  return gulp.src('src/**/**/*.ts')
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});
// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});
// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});

// move images 
gulp.task('images', function(){
  return gulp.src('src/**/*.jpg')
        .pipe(gulp.dest('build'));
}); 

// move fonts 

gulp.task('copy', function(){
  return gulp.src('src/**/*.{ttf,woff,eot,svg}')
    .pipe(gulp.dest('build')); 
}); 
