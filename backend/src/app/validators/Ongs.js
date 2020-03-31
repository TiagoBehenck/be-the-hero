import { celebrate, Segments, Joi } from 'celebrate';

let store = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
});

let index = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
});

let destroy = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

export default { store, index, destroy };
