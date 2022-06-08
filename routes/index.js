var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Pagrindinis'
  });
});

router.get('/apie_mus', function(req, res){
    res.render('apie_mus', {
    title: 'Apie mus'
  });
});

router.get('/marsrutai_ir_kainos', function(req, res){
    res.render('marsrutai_ir_kainos', {
    title: 'Maršrutai ir kainos'
  });
});

router.get('/inventorius', function(req, res){
    res.render('inventorius', {
    title: 'Inventorius'
  });
});

router.get('/kontaktai', function(req, res){
    res.render('kontaktai', {
    title: 'Kontaktai'
  });
});


module.exports = router;

