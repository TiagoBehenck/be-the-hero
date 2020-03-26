import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import OngsController from './app/controllers/OngsController';
import ProfileController from './app/controllers/ProfileController';
import IncidentsController from './app/controllers/IncidentsController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.put('/ongs/:id', OngsController.update);
routes.post('/ongs', OngsController.store);
routes.delete('/ongs/:id', OngsController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.put('/incidents/:id', IncidentsController.update);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

export default routes;
