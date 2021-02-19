var connect = require('connect');
var serveStatic = require('serve-static');
const port = 8035;

connect()
    .use(serveStatic("./public"))
    .listen(port, () => console.log(`Server running on ${port}...`));