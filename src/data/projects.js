const projects = [
	{
		title: "File Maintenance Automation Tool",
		slug: "file-maintenance-automation-tool",
		summary:
			"A Go-based automation tool for safe file cleanup and backup workflows using configurable rules.",
		description:
			"Built to automate recurring file maintenance tasks that would otherwise require manual cleanup. The project focuses on safe file handling, configuration-driven behavior, cross-platform structure, and maintainable documentation.",
		tech: [
			"Go",
			"PowerShell",
			"GitHub Actions",
			"Windows Task Scheduler",
			"INI Configuration",
		],
		highlights: [
			"Configuration-driven cleanup and backup behavior",
			"Runtime limit and file-age based processing",
			"Platform abstraction for Windows, Linux, and macOS support",
			"Automated tests around core file-processing behavior",
		],
		githubUrl: "https://github.com/theweak1/file-maintenance",
		liveUrl: "",
		featured: true,
	},
	{
		title: "Manufacturing System Investigation Support",
		slug: "manufacturing-system-investigation-support",
		summary:
			"Public-safe case study showing technical analysis, process control thinking, and documentation clarity.",
		description:
			"Supported technical investigation documentation for a manufacturing automation process involving configuration control, parameter verification, access levels, and release-readiness checks. The public version avoids confidential company, product, and system details.",
		tech: [
			"Technical Writing",
			"Process Analysis",
			"Automation Systems",
			"Quality Documentation",
		],
		highlights: [
			"Clarified complex system behavior for technical reviewers",
			"Explained control gaps without exposing confidential details",
			"Connected software behavior, user access, and process controls",
		],
		githubUrl: "",
		liveUrl: "",
		featured: true,
	},
	{
		title: "Outlook Rule Configuration Recovery",
		slug: "outlook-rule-configuration-recovery",
		summary:
			"Analyzed exported rule configuration data to recreate legacy email automation rules.",
		description:
			"Reviewed legacy Outlook rule data to recover the intended conditions, actions, and routing behavior so the rules could be rebuilt in a newer Outlook environment.",
		tech: ["Configuration Analysis", "Troubleshooting", "Workflow Automation"],
		highlights: [
			"Recovered rule intent from exported configuration data",
			"Converted hard-to-read rule data into rebuildable settings",
			"Improved continuity after migration to a newer client",
		],
		githubUrl: "",
		liveUrl: "",
		featured: false,
	},
];

module.exports = projects;
