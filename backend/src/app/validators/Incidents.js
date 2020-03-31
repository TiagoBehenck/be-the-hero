import { celebrate, Segments, Joi } from 'celebrate';

let store = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});

let index = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
});

let destroy = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
});

export default { store, index, destroy };
