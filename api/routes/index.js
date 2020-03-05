const router = require('express').Router();
const controller = require('../controllers');

router.post('/api/newUser', (req, res) => {
  controller.createUser(req, res);
});

router.get('/api/login', (req, res) => {
    controller.login(req, res);
  });

router.get('/api/hello', (req, res) => {
  controller.hello(req, res);
});


  module.exports = router;