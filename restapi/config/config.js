const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: '',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];
