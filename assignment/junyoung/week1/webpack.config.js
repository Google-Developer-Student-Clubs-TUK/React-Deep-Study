const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;//포트는 기본값 3천으로사용

module.exports = {
    mode: 'development', // 개발 모드
    entry: './src/index.js', // 최초 진입점이자 시작경로
    output: { // 결과를 하나로 묶어 + 번들된 파일 경로
      filename: 'bundle.[hash].js' // 4
    },
    module: {
        rules: [
        { // 1
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
            { // 2
            test: /\.html$/,
            use: [
                    {
                    loader: 'html-loader',
                    options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',//기본템플릿으로 설정
        })
    ],
    //개발서버설정
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
    },
};

