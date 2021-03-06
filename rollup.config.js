import {uglify} from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/inert.js',
    output: {
      file: 'dist/inert.js',
      format: 'umd',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    input: 'src/inert.js',
    output: {
      file: 'dist/inert.min.js',
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      uglify(),
    ],
  },
];
