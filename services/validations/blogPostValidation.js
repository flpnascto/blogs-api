const Joi = require('joi');

const blogPostValidation = (object) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).messages({
    'any.required': '{{ #label }} is required',
  });
  return schema.validate(object);
};

module.exports = blogPostValidation;