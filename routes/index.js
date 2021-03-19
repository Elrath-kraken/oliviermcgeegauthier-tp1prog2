var express = require('express');
var router = express.Router();
let formationsmongo = require('../controller/formationsmongocontroller.js')
let formationsnode = require('../controller/formationsnodecontroller.js')
let blog = require('../controller/blogcontroller.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'École de formation continue', description: 'La meilleure école de formation continue!' });
});

router.get('/formations', function (req, res, next) {
  res.render('formations', { title: 'Nos formations', description: 'Ceci est une liste de formations.', formationsmongo: formationsmongo.allformationsmongo, formationsnode: formationsnode.allformationsnode });
})

router.get('/formations/:page', function (req, res, next) {
  res.render('formations/formation', { formation: formations.getformationsbyId(req.params.page) });
})

router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'Blog', description: 'Ceci est une liste de blogs.', blog: blog.allblog })
})

router.get('/blog/:id', function (req, res, next) {
  res.render('blog/blogue', { blogue: blog.getblogById(req.params.id) });
})

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact', description: 'Ceci est une page de contact.' })
})

router.post('/contact', function (req, res, next) {
  let demande = demande.addDemande(req.body);
  console.log(req.body)
})
module.exports = router;
