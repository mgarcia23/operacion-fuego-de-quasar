const { getLocation } = require('../services/location-service');
const { getMessage } = require('../services/message-service');

const getSecret = async(body) => {

    let satelites = body.satellites

    let messages = [];
    let distances = [];
    satelites.forEach(satelite => {
        messages.push(satelite.message)
        distances.push({
            name: satelite.name,
            distance: satelite.distance
        });
    });

    let message;
    await getMessage(messages)
        .then(msg => message = msg)
        .catch(err => {
            throw err;
        });

    let position;
    await getLocation(distances)
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
