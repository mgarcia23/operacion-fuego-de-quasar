const locationService = require('../services/location-service');
const messageService = require('../services/message-service');

module.exports = {
    getSecret: () => {
        let message = messageService.getMessage();
        let position = locationService.getLocation();
        return { position, message };
    }
};