const app = require("./app.js");

const server = app.listen(8000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App listening at http://${host}:${port}}`);
});
