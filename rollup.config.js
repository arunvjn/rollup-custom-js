import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'main.js',
    output: {
        format: 'es',
        file: 'build/custom-js.js',
    },
    plugins: [babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }), nodeResolve()]
};