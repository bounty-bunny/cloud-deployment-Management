// src/config/config.js
module.exports = {
    development: {
        username: 'root',
        password: null,
        database: 'assignmenthub',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: 'root',
        password: null,
        database: 'assignmenthub_test',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: 'root',
        password: null,
        database: 'assignmenthub',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
};
