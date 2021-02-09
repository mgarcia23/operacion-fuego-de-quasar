const trilateration = require('node-trilateration');
const { satellites } = require("../database/satellites");

// input: distancia al emisor tal cual se recibe en cada satélite
// output: las coordenadas ‘x’ e ‘y’ del emisor del mensaje
const getLocation = async(distances) => {

    var beacons = [];
    satellites.forEach(satellite => {
        beacons.push({
            x: satellite.position.x,
            y: satellite.position.y,
            distance: satellite.distance
        });
    });

    if (beacons.find(x => x.distance == undefined) != undefined) {
        throw 'Cantidad de información insuficientes para calcular posición de la nave';
    }

    let position = trilateration.calculate(beacons);

    return {
        x: position.x,
        y: position.y
    };
};

module.exports = { getLocation };