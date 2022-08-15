/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["assets.example.com", "placeimg.com"],
	},
};

module.exports = nextConfig;
