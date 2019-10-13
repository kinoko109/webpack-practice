const path = require('path');

const outputPath= path.resolve(__dirname, 'dist');

module.exports = {
    // バンドル対象
    entry: './src/index.js',
    // 出力先
    output: {
        filename: 'main.js',
        path: outputPath
    },
    devServer: {
        contentBase: outputPath
    }
}