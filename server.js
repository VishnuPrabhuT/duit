const app = require("./app.js");

const server = app.listen(process.env.PORT, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App listening at http://${host}:${port}}`);
});
