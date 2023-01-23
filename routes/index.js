var express = require('express');
var router = express.Router();

let team = {
  laura: {
    name: 'Laura',
    pRole: 'Primary Role: Project Manager',
    sRole: 'Secundary Role: Back-end Developer',
    avatar: 'laura.jpg',
    github: 'https://github.com/lauralbarracin',
    linkedin: 'https://www.linkedin.com/in/lauraalbarracin/',
    description: 'I am a communicator who decided to get involved into technology world. I like to challenge myself and I enjoy the power of coding. During my last years of experience I gained talent for helping people to communicate their ideas, that`s why I love managing projects'
  },

  nathalya: {
    name: 'Nathalya',
    pRole: 'Primary Role: Front End',
    sRole: 'Secundary Role: Back-end Developer',
    avatar: 'nathalya.jpg',
    github: 'https://github.com/',
    linkedin: 'www.linkedin.com',
    description: ''
  },

  tallyta: {
    name: 'Tallyta',
    pRole: 'Primary Role: Designer',
    sRole: 'Secundary Role: Back-end Developer',
    avatar: 'tallyta.jpg',
    github: 'https://github.com/',
    linkedin: 'www.linkedin.com',
    description: ''
  },

  maria: {
    name: 'Maria',
    pRole: 'Motion Designer',
    sRole: '',
    avatar: 'maria2.jpg',
    github: 'https://github.com/',
    linkedin: 'www.linkedin.com',
    description: ''
  },
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    content: 'express is easy!'
  });
});

router.get('/team/:member', function (req, res) { //it is connected to layout <a></a> and create the route
  console.log(req.params.member);
  res.render('team', {
    person: team[req.params.member]
  });
})

module.exports = router;