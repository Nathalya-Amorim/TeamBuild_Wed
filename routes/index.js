var express = require('express');
var router = express.Router();

let team = {
  laura: {
    name: 'Laura',
    pRole: ' Project Manager',
    sRole: ' Back - End Developer',
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
    description: 'I’m Nathalya Menezes, a Front-End Developer and Back-End at We All Hockey from Brazil but currently based in London; passionate about creating and discovering new things in 3D JavaScript, HTML and CSS.'
  },

  tallyta: {
    name: 'Tallyta Triolo',
    pRole: 'Graphic & Web Designer',
    sRole: 'Back - End Developer',
    avatar: 'tallyta.jpg',
    github: 'https://github.com/tallytriolo',
    linkedin: 'https://www.linkedin.com/in/tallytatriolo',
    description: 'I’m a creative and enthusiastic graphic and web designer who can plan, create, develop and execute unique campaigns. On the We Are All Hockey team, my role is to develop an inclusive campaign that promotes respect and equality in hockey, creating printed and digital communication pieces.'
  },

  mariia: {
    name: 'Mariia',
    pRole: 'Motion Graphics Specialist',
    sRole: 'Graphic Designer',
    avatar: 'manya_photo.jpg',
    github: 'https://github.com/myselfmarish',
    linkedin: 'https://www.linkedin.com/in/masha-shevchenko-94a98b230/',
    description: 'A creative and customer-oriented designer with an eye for commercial fashion and detail in product styling. I used to be a content creator for russian hockey team. And currently working at We all Hockey to promote the awareness of bullying in hockey'
  },
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    content: 'express is easy!',
    home: true
  });
});

router.get('/team/:member', function (req, res) { //it is connected to layout <a></a> and create the route
  console.log(req.params.member);
  res.render('team', {
    person: team[req.params.member]
  });
})

module.exports = router;