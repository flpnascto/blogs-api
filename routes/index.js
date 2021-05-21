const routes = require('express').Router();
const categoriesRoute = require('./categoriesRoute');
const loginRoute = require('./loginRoute');
const postRoute = require('./postRoute');
const userRoute = require('./userRoute');

routes.use('/categories', categoriesRoute);
routes.use('/login', loginRoute);
routes.use('/post', postRoute);
routes.use('/user', userRoute);

module.exports = routes;