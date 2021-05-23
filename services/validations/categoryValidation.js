const Joi = require('joi');

const categoryValidation = (object) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  }).messages({
    'any.required': '{{ #label }} is required',
  });
  return schema.validate(object);
};

module.exports = categoryValidation;