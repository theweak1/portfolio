const projects = [
	{
		title: "File Maintenance Automation Tool",
		slug: "file-maintenance-automation-tool",
		summary:
			"A Go-based automation tool that safely cleans up and backs up files using configurable rules.",
		problem:
			"Recurring file cleanup and backup tasks were manual, repetitive, and easy to overlook, especially when files needed to be handled safely based on age, runtime limits, and backup requirements.",
		solution:
			"Built a configurable automation tool that processes files based on defined rules, safely backs up files when required, removes eligible files, and supports scheduled execution through Windows Task Scheduler.",
		description:
			"Built to reduce repetitive manual file maintenance work by automating cleanup and backup behavior through a configurable workflow. The project focuses on safe file handling, runtime limits, file-age based processing, cross-platform structure, automated release builds, and maintainable documentation.",
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
			"Set up a GitHub Actions workflow to test, build, archive, and publish release artifacts",
			"Embedded version, commit, and build-date metadata into release binaries",
			"Documented setup, configuration, scheduled execution, and release behavior",
		],
		githubUrl: "https://github.com/theweak1/file-maintenance",
		liveUrl: "",
		featured: true,
	},
	{
		title: "Backdrop CLI Wallpaper Manager",
		slug: "backdrop-cli-wallpaper-manager",
		summary:
			"Contributed to an open-source Go command-line tool for managing desktop wallpapers.",
		problem:
			"Managing wallpapers from the terminal can be inconvenient when users need to search local images, use custom directories, rotate wallpapers, or set wallpapers from external image URLs.",
		solution:
			"Helped build Backdrop, an open-source CLI wallpaper manager that supports terminal-based wallpaper selection, custom wallpaper directories, slideshow behavior, setting wallpapers from image URLs, and automated release delivery through GitHub Actions.",
		description:
			"Helped build and maintain Backdrop, an open-source command-line wallpaper manager written in Go. The project provides terminal-based wallpaper management, including wallpaper selection, custom image directories, slideshow support, and setting wallpapers from image URLs. I also helped set up GitHub Actions workflows for release automation and format verification, strengthening my experience with open-source collaboration, CI/CD, and practical developer-facing CLI tooling.",
		tech: [
			"Go",
			"Cobra",
			"Viper",
			"Fuzzy Finder",
			"GitHub Actions",
			"GitHub",
			"CLI Tools",
		],
		highlights: [
			"Contributed to an existing open-source Go codebase",
			"Worked on a practical command-line tool used to manage desktop wallpapers",
			"Supported terminal-based workflows for selecting and setting wallpapers",
			"Set up GitHub Actions release automation for packaged Linux and Windows builds",
			"Added PR format verification to help keep Go code formatting consistent",
			"Used Git and GitHub workflows to collaborate on project changes",
			"Improved experience with CLI structure, project organization, and maintainability",
		],
		githubUrl: "https://github.com/JanMichaelSE/backdrop",
		liveUrl: "",
		featured: true,
	},
	{
		title: "Portfolio Manager Capstone",
		slug: "portfolio-manager-capstone",
		summary:
			"A full-stack capstone project for managing startup, investor, portfolio, and financial data workflows.",
		problem:
			"Startup and investor information can become difficult to manage when profile data, investor relationships, cap tables, and financial metrics are handled across separate tools or manual workflows.",
		solution:
			"Worked on the backend, database structure, frontend-to-backend connection, and Codat integration for a full-stack portfolio management application built with a Node.js backend and React frontend.",
		description:
			"Worked on the backend side of a capstone portfolio management application designed to support startup and investor workflows. My work focused on creating the database structure, building backend API functionality, connecting frontend workflows to backend services, and supporting a Codat integration for financial data such as profit-and-loss and balance sheet information.",
		tech: [
			"Node.js",
			"Express",
			"React",
			"Prisma",
			"MongoDB",
			"Codat API",
			"JWT",
			"JavaScript",
		],
		highlights: [
			"Worked on the backend API structure for a full-stack capstone application",
			"Created database models for users, investors, startups, posts, cap table data, and related portfolio information",
			"Helped connect frontend workflows with backend API routes",
			"Supported authenticated backend routes using JWT-based access control",
			"Built integration logic for retrieving financial data through the Codat API",
			"Handled backend support for startup profiles, investor relationships, cap table data, KPIs, and financial reporting views",
		],
		githubUrl: "https://github.com/theweak1/Portfolio-Manager",
		liveUrl: "",
		featured: true,
	},
];

export default projects;
