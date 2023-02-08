const { Router } = require('express');
const { getCategorias, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria');

const router = Router();


router.get('/get', getCategorias);

router.post('/post', postCategoria);

router.put('/put/:id', putCategoria);

router.delete('/delete/:id', deleteCategoria);


module.exports = router;


