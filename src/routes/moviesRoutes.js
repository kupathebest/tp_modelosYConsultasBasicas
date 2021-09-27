const express = require('express');
const router = express.Router();
const {list,nueva,recommended,detail,add,create, edit, update, remove, destroy} = require('../controllers/moviesController');

router
    .get('/movies', list)
    .get('/movies/new', nueva)
    .get('/movies/recommended', recommended)
    .get('/movies/detail/:id', detail)
    .get('/movies/add', add)
    .post('/movies/create', create)
    .get('/movies/edit/:id', edit)
    .put('/movies/update/:id', update)
    .get('/movies/remove/:id', remove)
    .delete('/movies/destroy/:id', destroy)


module.exports = router;
