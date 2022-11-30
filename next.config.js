const withMarkdoc = require('@markdoc/next.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = nextConfig

module.exports = withMarkdoc({ mode: 'static' })({
	pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});

