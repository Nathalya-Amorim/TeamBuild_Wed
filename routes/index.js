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
    name: 'Nathalya Menezes',
    pRole: 'Front - End Developer',
    sRole: 'Back - End Developer',
    avatar: 'nathalya.jpg',
    github: 'https://github.com/Nathalya-Amorim',
    linkedin: 'https://www.linkedin.com/in/nathalya-menezes-0b1a37130/',
    description: ' Description: I’m Nathalya Menezes, a Front-End Developer and Back-End at We All Hockey from Brazil but currently based in London; passionate about creating and discovering new things in 3D JavaScript, HTML and CSS.'
  },

  tallyta: {
    name: 'Tallyta',
    pRole: '#',
    sRole: '#',
    avatar: '#',
    github: '#',
    linkedin: '#',
    description: '#'
  },

  maria: {
    name: 'Mariia',
    pRole: '#',
    sRole: '',
    avatar: '#',
    github: '#',
    linkedin: '#',
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