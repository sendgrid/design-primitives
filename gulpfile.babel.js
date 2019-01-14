import del from 'del';
import gulp from 'gulp';
import theo from 'theo';
import gulpTheo from 'gulp-theo';
import jsonLint from 'gulp-jsonlint';

import sgScss from './formatters/sg.scss';
import sgCss from './formatters/sg.css';
import sgEs6Js from './formatters/sg.es6.js';
import sgCommonJs from './formatters/sg.common.js';

theo.registerFormat('scss', sgScss);
theo.registerFormat('css', sgCss);
theo.registerFormat('es6.js', sgEs6Js);
theo.registerFormat('common.js', sgCommonJs);

gulp.task('clean', () => del(['tokens']));

gulp.task('lint', (done) => {
  gulp
    .src('./src/**/*.json')
    .pipe(jsonLint())
    .pipe(jsonLint.reporter())
    .pipe(jsonLint.failAfterError());
    done();
});

gulp.task('styleguide:tokens:scss', () =>
  gulp.src('src/style-guide/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('tokens/style-guide/scss'))
);

gulp.task('styleguide:tokens:css', () =>
  gulp.src('src/style-guide/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'css' }
    }))
    .pipe(gulp.dest('tokens/style-guide/css'))
);

gulp.task('styleguide:tokens:es6js', () =>
  gulp.src('src/style-guide/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'es6.js' }
    }))
    .pipe(gulp.dest('tokens/style-guide/es6'))
);

gulp.task('styleguide:tokens:commonjs', () =>
  gulp.src('src/style-guide/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'common.js' }
    }))
    .pipe(gulp.dest('tokens/style-guide/js'))
);

gulp.task('dotdesign:tokens:scss', () =>
  gulp.src('src/dot-design/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'scss' }
    }))
    .pipe(gulp.dest('tokens/dot-design/scss'))
);

gulp.task('dotdesign:tokens:css', () =>
  gulp.src('src/dot-design/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'css' }
    }))
    .pipe(gulp.dest('tokens/dot-design/css'))
);

gulp.task('dotdesign:tokens:es6js', () =>
  gulp.src('src/dot-design/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'es6.js' }
    }))
    .pipe(gulp.dest('tokens/dot-design/es6'))
);

gulp.task('dotdesign:tokens:commonjs', () =>
  gulp.src('src/dot-design/base.json')
    .pipe(gulpTheo({
      transform: { type: 'web' },
      format: { type: 'common.js' }
    }))
    .pipe(gulp.dest('tokens/dot-design/js'))
);

gulp.task('default',
  gulp.series(
    gulp.parallel(
      'clean',
      'lint'
    ),
    gulp.parallel(
      'styleguide:tokens:scss',
      'styleguide:tokens:css',
      'styleguide:tokens:es6js',
      'styleguide:tokens:commonjs',
      'dotdesign:tokens:scss',
      'dotdesign:tokens:css',
      'dotdesign:tokens:es6js',
      'dotdesign:tokens:commonjs',
    )
  )
);
