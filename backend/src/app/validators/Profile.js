import { celebrate, Segments, Joi } from 'celebrate';

let get = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
});

export default { get };
