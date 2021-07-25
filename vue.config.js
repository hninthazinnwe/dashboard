// module.exports = {
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: "https://kopwar.com.mm",
//                 changeOrigin: true,
//                 secure: false,
//                 pathRewrite: {
//                     "^/api": ""
//                 }
//             },
//             '/foo': {
//                 target: '<other_url>'
//             }
//         }, // string | Object
//         before: app => {}


//     } }

module.exports = {
    devServer: {
        proxy: {
            "/api/": {
                target: 'https://kopwar.com.mm',
            }
        }
    }
};