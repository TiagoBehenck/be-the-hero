import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessionController from './app/controllers/SessionController';
import OngsController from './app/controllers/OngsController';
import ProfileController from './app/controllers/ProfileController';
import IncidentsController from './app/controllers/IncidentsController';

import ongValidate from './app/validators/Ongs';
import incidentsValidate from './app/validators/Incidents';
import profileValidate from './app/validators/Profile';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', ongValidate.store, OngsController.store);
routes.get('/ongs', ongValidate.index, OngsController.index);
routes.delete('/ongs/:id', ongValidate.destroy, OngsController.delete);

routes.post('/incidents', incidentsValidate.store, IncidentsController.store);
routes.get('/incidents', incidentsValidate.index, IncidentsController.index);
routes.put('/incidents/:id', IncidentsController.update);
routes.delete(
  '/incidents/:id',
  incidentsValidate.destroy,
  IncidentsController.delete
);

routes.get('/profile', profileValidate.get, ProfileController.index);

export default routes;
