module.exports = {
    style: {
        postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            // eslint-disable-next-line no-param-reassign
            webpackConfig.resolve.fallback = {
                fs: false,
            };
            return webpackConfig;
        },
    },
};
