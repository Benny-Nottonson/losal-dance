/** @type {import('next').NextConfig} */
const nextConfig = {};

const fs = require("fs");
const path = require("path");

const refreshFiles = () => {
	const handoutPath = path.join(__dirname, "public", "handouts");
	const handoutFiles = fs.readdirSync(handoutPath);
	fs.writeFileSync(
		path.join(__dirname, "public/handout-pdfs.txt"),
		handoutFiles.join("\n"),
	);
};

module.exports = async (phase, { defaultConfig }) => {
	refreshFiles();
	return nextConfig;
};
