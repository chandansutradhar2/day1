const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.use(express.static(__dirname + "/node_modules"));

app.get("/", (req, res) => {
	res.sendFile("public/index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
	res.sendFile("public/login.html", { root: __dirname });
});

http: app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
