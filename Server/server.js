const app = require("./src/index");

const PORT = 5000;

const server = app.listen( PORT, () => {
    console.log(`Start with ${PORT}`)
})

// process.on('SIGINT', () => {
//     server.close(() => {
//         console.log('Exit server express');
//     })
// })