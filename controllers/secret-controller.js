const secretService = require('../services/secret-service');
const satelliteService = require('../services/satellite-service');

module.exports = {
    setSecrets: (req, res, next) => {
        try {
            let satellitesForUpdate = req.body.satellites;
            satelliteService.updateSatellites(satellitesForUpdate);
            let response = secretService.getSecret();
            res.json(response);
        } catch (err) {
            console.log(err);
            res.send(404);
        }
        next();
    },
    setSecret: (req, res, next) => {
        try {
            let satellitesForUpdate = [];
            satellitesForUpdate.push({
                name: req.params.satellite_name,
                distance: req.body.distance,
                message: req.body.message
            });
            satelliteService.updateSatellites(satellitesForUpdate);
            let response = secretService.getSecret();
            res.json(response);
        } catch (err) {
            console.log(err);
            res.send(404);
        }
        next();
    },
    getSecret: (req, res, next) => {
        try {
            let response = secretService.getSecret();
            res.json(response);
        } catch (err) {
            console.log(err);
            res.send('No hay información suficiente para indicar posición y mensaje de auxilio');
        }
        next();
    }
}