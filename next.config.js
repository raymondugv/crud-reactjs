/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["ui-avatars.com", "via.placeholder.com", "placeimg.com"],
	},
};

module.exports = nextConfig;
