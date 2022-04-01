module.exports = {
	name: "Personal",
	description: "My personal site and side projects",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.peterweightman.com",
		"https://code-review.app",
		"https://www.quiz-helper.netlify.app/cryptic",
	]
};