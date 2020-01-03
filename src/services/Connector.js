const BasicConnector = require('json-rpc-service/src/services/Connector');

class Connector extends BasicConnector {
    middlewareMode = true;

    // TODO -
}

module.exports = Connector;
