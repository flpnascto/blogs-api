const Joi = require('joi');

const userValidation = (object) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.string().required(),
  })
    .messages({
      'string.min': '{{ #label }} length must be at least {{ #limit }} characters long',
      'string.length': '{{ #label }} length must be {{ #limit }} characters long',
      'string.email': '{{ #label }} must be a valid email',
      'any.required': '{{ #label }} is required',
    });
  return schema.validate(object);
};

module.exports = userValidation;
