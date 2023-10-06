const Hapi = require('@hapi/hapi');
const eslint = require('eslint');
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
    });
    server.route(routes);
    await server.start();
    console.log(`Server running in ${server.info.uri}`);
};
init();