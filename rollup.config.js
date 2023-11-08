import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'main.js',
    output: {
        dir: 'output',
        format: 'es'
    },
    plugins: [babel({ babelHelpers: 'bundled' }), nodeResolve()]
};