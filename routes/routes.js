const comunicationController = require('../controllers/secret-controller');

module.exports = (router) => {

  /** post all satellites messages and distances */
  router
      .route('/topsecret')
      .post(comunicationController.setSecrets);

  /** post sattelite message and distance */
  router
      .route('/topsecret_split/:satellite_name')
      .post(comunicationController.setSecret);

  /** get message and position */
  router
      .route('/topsecret_split/:satellite_name')
      .get(comunicationController.getSecret)
};
