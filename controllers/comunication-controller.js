const { updatesatellites } = require('../services/satellite-service');
const { getLocation } = require('../services/location-service');
const { getMessage } = require('../services/message-service');
const { satellites } = require('../database/satellites');

const getSecret = async (body, satellite_name) => {
    console.log('INICIO');
    console.log(satellites);
    console.log(satellite_name);

    let satellitesForUpdate = [];
    if (!satellite_name) {
        console.log('lamada comun');
        satellitesForUpdate = body.satellites;
    } else if (body) {
        console.log('lamada split' + satellite_name);
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
