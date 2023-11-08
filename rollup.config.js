import { babel } from '@rollup/plugin-babel';

export default {
    input: 'main.js',
    output: {
        dir: 'output',
        format: 'es'
    },
    plugins: [babel({ babelHelpers: 'bundled' })]
};