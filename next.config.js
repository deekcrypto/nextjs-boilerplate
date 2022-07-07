const withPlugins = require('next-compose-plugins');
const withExportImages = require('next-export-optimize-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([withExportImages, withBundleAnalyzer], {
	eslint: {
		dirs: ['.'],
	},
	poweredByHeader: false,
	trailingSlash: true,
	basePath: '',
	reactStrictMode: true,
	images: {
		loader: 'custom',
	},
});
