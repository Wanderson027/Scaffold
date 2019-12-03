const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Livro = require('../models/livroSchema');

router.get('/:livroId', (req, res, next) => {
    const id = req.params.livroId;
    Livro.findById(id)
        .exec()
        .then(livro => {
            res.status(200).json({
                livro
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err
            });
        })

});
router.get('/', (req, res, next) => {
    const livro = {};
    Livro.find({})
        .exec()
        .then(cadastrarLivro => {
            res.status(200).json({
                cadastrarLivro
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err
            });
        })

});


router.post('/', (req, res, next) => {
    console.log(req.body.titulo);

    const livro = new Livro({
        _id: new mongoose.Types.ObjectId(),
        titulo: req.body.titulo,
        autor: req.body.autor,
        editora: req.body.editora,
        ano: req.body.ano,
        genero: req.body.genero,
        valor: req.body.valor
    });
    //promise
    console.log("antes de salvar o livro", req.body.titulo);
    livro.save()
        .then(result => {
            res.status(200).json({
                message: ' POST /livro',
               livroAdicionado: livro
            });
        })
        .catch(err => {
            res.status(500).json({
                err
            });
        });

});
router.put('/:livroId', (req, res, next) => {
    const id = req.params.livroId;
    console.log(req.body);

    Livro.updateOne({ _id: id }, {
            $set: {
            titulo: req.body.titulo,
            autor: req.body.autor,
            editora: req.body.editora,
            ano: req.body.ano,
            genero: req.body.genero,
            valor: req.body.valor
            }
        })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                err
            });
        });

});
router.delete('/:livroId', (req, res, next) => {
    const id = req.params.livroId;

    Livro.remove({ _id: id })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                err
            });
        });

});


module.exports = router;