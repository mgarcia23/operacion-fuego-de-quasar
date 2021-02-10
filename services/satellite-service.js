const { satellites } = require("../database/satellites");

module.exports = {
    updateSatellites: (satellitesForUpdate) => {
        try {
            satellitesForUpdate.forEach(satelliteForUpdate => {
                let satellite = satellites.find(x => x.name.toUpperCase() == satelliteForUpdate.name.toUpperCase());
                if (satellite) {
                    satellite.distance = satelliteForUpdate.distance;
                    satellite.message = satelliteForUpdate.message;
                }
            });
        } catch (err) {
            throw err;
        }
    }
};
