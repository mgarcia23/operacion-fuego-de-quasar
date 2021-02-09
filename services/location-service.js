const trilateration = require('node-trilateration');

let satelites = [
    {
        name: 'kenobi',
        position: {
            x: -500,
            y: -200
        }
    },
    {
        name: 'skywalker',
        position: {
            x: 100,
            y: -100
        }
    },
    {
        name: 'sato',
        position: {
            x: 500,
            y: 100
        }
    }
]

// input: distancia al emisor tal cual se recibe en cada satélite
// output: las coordenadas ‘x’ e ‘y’ del emisor del mensaje
const getLocation = async(distances) => {

    var beacons = [];
    satelites.forEach(satelite => {
        satelite.distance = distances.find(x => x.name.toUpperCase() == satelite.name.toUpperCase())?.distance;
        beacons.push({
            x: satelite.position.x,
            y: satelite.position.y,
            distance: satelite.distance
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