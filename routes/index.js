var express = require('express');
var router = express.Router();

let team = {
  laura:{
    name: 'Laura',
    role: 'Project Manager',
    avatar: 'laura.jpg'
  },

  nathalya:{
    name: 'Nathalya',
    role: 'Front End',
    avatar: 'nathalya.jpg'
  },

  tallyta:{
    name: 'Tallyta',
    role: 'Designer',
    avatar: 'tallyta.jpg'
  },

  mariia:{
    name: 'Mariia',
    role: 'Motion Designer',
    avatar: 'mariia.jpg'
  },
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
   content: 'express is easy!'
  });
});

router.get('/team/:member', function(req, res) {
  console.log(req.params.member);
  res.render('team', { person: team[req.params.member]});
})

module.exports = router;
