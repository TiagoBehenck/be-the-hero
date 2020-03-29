import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessionController from './app/controllers/SessionController';
import OngsController from './app/controllers/OngsController';
import ProfileController from './app/controllers/ProfileController';
import IncidentsController from './app/controllers/IncidentsController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngsController.store
);

routes.get(
  '/ongs',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  OngsController.index
);
routes.delete('/ongs/:id', OngsController.delete);

routes.post('/incidents', IncidentsController.store);
routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentsController.index
);
routes.get('/incidents/:id', IncidentsController.show);
routes.put('/incidents/:id', IncidentsController.update);
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentsController.delete
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  ProfileController.index
);

export default routes;
