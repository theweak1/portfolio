const router = require("express").Router();

router.get("/", (req, res) => {
	// Logic to fetch and return home page data
	res.json({ message: "Welcome to the home page" });
});

router.get("/about", (req, res) => {
	// Logic to fetch and return about page data
	res.json({ message: "About us page" });
});

router.get("/contact", (req, res) => {
	// Logic to fetch and return contact page data
	res.json({ message: "Contact us page" });
});

router.get("/projects", (req, res) => {
	// Logic to fetch and return projects
	res.json({ message: "List of projects" });
});

module.exports = router;
