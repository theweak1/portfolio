const router = require("express").Router();
const projects = require("../data/projects");
const profile = require("../data/profile");

const basePageData = (req, overrides = {}) => ({
	profile,
	currentPath: req.path,
	...overrides,
});

router.get("/", (req, res) => {
	res.render(
		"index",
		basePageData(req, {
			title: `${profile.name} | ${profile.title}`,
			description: profile.description,
			featuredProjects: projects.filter((project) => project.featured),
		}),
	);
});

router.get("/about", (req, res) => {
	res.render(
		"about",
		basePageData(req, {
			title: `About | ${profile.name}`,
			description: `Learn more about ${profile.name}'s software engineering and automation background.`,
		}),
	);
});

router.get("/projects", (req, res) => {
	res.render(
		"projects",
		basePageData(req, {
			title: `Projects | ${profile.name}`,
			description:
				"A collection of software, automation, and technical documentation projects.",
			projects,
		}),
	);
});

router.get("/contact", (req, res) => {
	res.render(
		"contact",
		basePageData(req, {
			title: `Contact | ${profile.name}`,
			description: `Contact ${profile.name} for software engineering and automation opportunities.`,
		}),
	);
});

module.exports = router;
