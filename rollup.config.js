import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from "rollup-plugin-typescript";

export default {
    input: "src/index.tsx",
    output: {
        file: "dist/index.js",
        format: "amd",
        sourcemap: true,
    },
    plugins: [
        nodeResolve({
            extensions: [".ts", ".tsx"]
        }),
        typescript(),
        replace({
            preventAssignment: true,
            'process.browser': true,
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        commonjs(),
        serve({
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({watch: "src/**/*"}),
    ]
};
