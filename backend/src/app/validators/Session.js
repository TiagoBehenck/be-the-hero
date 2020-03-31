import { celebrate, Segments, Joi } from 'celebrate';

let store = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});

export default { store };
