const projects = [
	{
		title: "File Maintenance Automation Tool",
		slug: "file-maintenance-automation-tool",
		summary:
			"A Go-based automation tool that safely cleans up and backs up files using configurable rules.",
		description:
			"Built to reduce repetitive manual file maintenance work by automating cleanup and backup behavior through a configurable workflow. The project focuses on safe file handling, runtime limits, file-age based processing, cross-platform structure, and maintainable documentation.",
		tech: [
			"Go",
			"PowerShell",
			"GitHub Actions",
			"Windows Task Scheduler",
			"INI Configuration",
		],
		highlights: [
			"Built configurable cleanup and backup behavior using an INI-based setup",
			"Added runtime limits and file-age checks to control how files are processed",
			"Designed a platform abstraction for Windows, Linux, and macOS support",
			"Added automated tests around the core file-processing behavior",
			"Documented setup, configuration, and scheduled execution steps",
		],
		githubUrl: "https://github.com/theweak1/file-maintenance",
		liveUrl: "",
		featured: true,
	},
	{
		title: "Manufacturing System Investigation Support",
		slug: "manufacturing-system-investigation-support",
		summary:
			"A public-safe case study focused on technical investigation, automation behavior, and process control analysis.",
		description:
			"Supported technical investigation documentation for a manufacturing automation process involving configuration control, parameter verification, access levels, and release-readiness checks. The case study focuses on how system behavior, user access, and process controls were evaluated while avoiding confidential company, product, and system details.",
		tech: [
			"Technical Writing",
			"Process Analysis",
			"Automation Systems",
			"Quality Documentation",
			"Root Cause Analysis",
		],
		highlights: [
			"Clarified complex automation behavior for technical and quality reviewers",
			"Connected software behavior, access levels, and process controls in a clear narrative",
			"Explained control gaps without exposing confidential information",
			"Improved the structure and readability of investigation documentation",
			"Supported a public-safe version suitable for portfolio presentation",
		],
		githubUrl: "",
		liveUrl: "",
		featured: false,
	},
];

module.exports = projects;
