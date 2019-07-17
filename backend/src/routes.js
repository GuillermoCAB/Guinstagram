const express = require('express');
const multer = require('multer');

const PostController = require('./controller/PostController.js');
const LikeController = require('./controller/LikeController.js')

const uploadConfigs = require('./config/upload.js')

const routes = new express.Router();
const upload = multer(uploadConfigs);

routes.get('/post', PostController.index);
routes.post('/post', upload.single('image'), PostController.store);
routes.post('/post/:id/like', LikeController.store);


module.exports = routes;