import del from 'del';
import gulp from 'gulp';
import theo from 'theo';
import gulpTheo from 'gulp-theo';
import jsonLint from 'gulp-jsonlint';

import sgScss from './formatters/sg.scss';
import sgCss from './formatters/sg.css';

theo.registerFormat('scss', sgScss);
theo.registerFormat('css', sgCss);

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

gulp.task('default',
  gulp.series(
    gulp.parallel(
      'clean',
      'lint'
    ),
    gulp.parallel(
      'styleguide:tokens:scss',
      'styleguide:tokens:css',
      'dotdesign:tokens:scss',
      'dotdesign:tokens:css'
    )
  )
);
