const trilateration = require('node-trilateration');
const { satellites } = require("../database/satellites");

module.exports = {
    getLocation: () => {

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
    }
};