const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfilesController = require('./controllers/ProfilesController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/incidents', IncidentsController.index);
routes.get('/profile/byOng', ProfilesController.byOng);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes; 