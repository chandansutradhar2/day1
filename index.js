const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.sendFile("public/index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
	res.sendFile("public/login.html", { root: __dirname });
});

http: app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
