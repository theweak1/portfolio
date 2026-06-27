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
];

export default projects;
