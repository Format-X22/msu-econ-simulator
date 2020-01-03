const BasicController = require('json-rpc-service/src/controllers/Basic');

class User extends BasicController {
    async createFirstRootAdminIfEmpty() {
        // TODO -
    }
}

module.exports = User;
