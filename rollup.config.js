// Rollup plugins
import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
// 可以提前适用最新css特性（已废弃由postcss-preset-env替代，但还是引用进来了。。。）
// import cssnext from 'postcss-cssnext';
// 替代cssnext
import presetEnv from 'postcss-preset-env'
import cssnano from 'cssnano';

export default {
  input: 'src/scripts/main.js', // options.entry is deprecated, use options.input #1612 
  output : {
    file: 'build/js/main.min.js',
    format: 'iife',
    name: "studyRollup",
    sourcemap: true
  },
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        presetEnv(),
        cssnano(),
      ],
      extensions: [ '.css' ],
    }),
    commonjs(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      babelHelpers: 'external', // 'bundled' | 'runtime' | 'inline' | 'external'
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && terser())
  ]
};