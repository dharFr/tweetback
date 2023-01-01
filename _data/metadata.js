let data = {
	username: "_dhar", // No leading @ here
	homeLabel: "olivier.audard.net",
	homeUrl: "https://olivier.audard.net/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;