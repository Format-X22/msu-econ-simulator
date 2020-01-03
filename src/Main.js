const BasicMain = require('json-rpc-service/src/services/BasicMain');
const Connector = require('./services/Connector');
const WebServer = require('./services/WebServer');
const env = require('./data/env');
const UserController = require('./controllers/User');

class Main extends BasicMain {
    constructor() {
        super(env);

        const connector = new Connector();
        const webServer = new WebServer({ connector });

        this.startMongoBeforeBoot();
        this.addNested(connector, webServer);
    }

    async boot() {
        const userController = new UserController();

        await userController.createFirstRootAdminIfEmpty();
    }
}

module.exports = Main;
