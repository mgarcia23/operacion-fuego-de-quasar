const { updatesatellites } = require('../services/satellite-service');
const { getLocation } = require('../services/location-service');
const { getMessage } = require('../services/message-service');
const { satellites } = require('../database/satellites');

const getSecret = async (body, satellite_name) => {

    let satellitesForUpdate = [];
    if (!satellite_name) {
        satellitesForUpdate = body.satellites;
    } else if (body) {
        satellitesForUpdate.push({
            name: satellite_name,
            distance: body.distance,
            message: body.message
        });
    }

    await updatesatellites(satellitesForUpdate);

    let message;
    await getMessage()
        .then(msg => message = msg)
        .catch(err => {
            throw err;
        });

    let position;
    await getLocation()
        .then(res => position = res)
        .catch(err => {
            throw err;
        });

    let response = {
        position: position, // position: { x: -100.0, y: 75.5 },
        message: message
    }

    return response;
}

module.exports = { getSecret };
