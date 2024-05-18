const http = require("http");
const PORT = 3001;

const router = require('./routes/router')

const server = http.createServer((req, res) => {
    router.handleRoutes(req,res);
});
server.listen(PORT, () => {
  console.log("server is listening on port :", PORT);
});
