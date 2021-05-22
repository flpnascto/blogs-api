const Joi = require('joi');

const loginValidation = (object) => {
  const schema = Joi.object({
    email: Joi.string().empty().required(),
    password: Joi.string().empty().required(),
  }).messages({
    'string.empty': '{{ #label }} is not allowed to be empty',
    'any.required': '{{ #label }} is required',
  });

  return schema.validate(object);
};

module.exports = loginValidation;