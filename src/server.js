const express = require("express");
const path = require("path");
require("dotenv").config({ quiet: true });

const routes = require("./routes/pages");
const profile = require("./data/profile");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.use((req, res) => {
	res.status(404).render("404", {
		title: "Page not found",
		description: "The page you requested could not be found.",
		currentPath: req.path,
		profile,
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Portfolio running at http://localhost:${PORT}`);
});
