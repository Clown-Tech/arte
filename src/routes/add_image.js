const router = require('express').Router();
const AddImage = require('../models').models.AddImage;
const uniqid = require("uniqid");
var rn = require('random-number');
const countries = require("../constants/countries.js");
/*
mailing.get('/mailing/:id', async (req, res) => { });
mailing.get('/mailing', async (req, res) => { res.send('mailing') });
mailing.post('/mailing/:id', async (req, res) => { });
*/

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

router.get('/addImage', async (req, res) => {
AddImage.find({}).then(user => {
  shuffleArray(user);
  res.send(user);
  /*
  var isContentThere = false;
  for(let i = 0; i < user.length; i++){
    if(user[i].title === req.body.title){
      isContentThere = true;
      break;
    }
  }
  if (isContentThere) {
    return res.status(400).json({ title: "content already exists" });
  } else {
    res.send(req.body);
    }
    */
  });
 });


/**
 * @api {post} /api/mailing Add new Mailers(s)
 * @apiDescription Adds an array of new mailers(s)
 * @apiVersion 1.0.0
 * @apiName Add new Mailers(s)
 * @apiGroup Mailer(s)
 * @apiPermission general
 *
 * @apiReqBody  {String}         ["name":"John Smith"]                User's Name
 * @apiReqBody  {String}         ["email":"john.smith@email.com"]     Email
 *
 * @apiSuccess {Object[]} attendee(s) List of successfully registered Mailers(s).
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */


 function fakeDemographicData(){
   countriesNum = rn({min:  0, max:  20, integer: true});
   data = [];
   for(var i = 0; i < countriesNum; i++){
     country = rn({min:  0, max:  240, integer: true});
     data.push([countries[country].name,rn({min:  0, max:  400, integer: true})])
   }
   //console.log(data);
   return data;
 }


router.post("/addImage", async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  AddImage.find({ handle: req.body.handle}).then(user => {
    var isContentThere = false;
    for(let i = 0; i < user.length; i++){
      if(user[i].title === req.body.title){
        isContentThere = true;
        break;
      }
    }
    if (isContentThere) {
      return res.status(400).json({ title: "content already exists" });
    } else {
      var body = req.body;
      body = {...body,
        votes: rn({min:  0, max:  1000, integer: true}),
        viewerCount: rn({min:  0, max:  50000, integer: true}),
        postID: uniqid(),
        demographic: fakeDemographicData()
       }
      //console.log(body);
      AddImage.insertMany(body, (error, docs) => {
        if (error) {
          res.send(error);
        }

        if (docs) {
          res.send(docs);
        }
      });
    }
  });
  /*
  AddImage.insertMany(req.body, (error, docs) => {
    if (error) {
      res.send(error);
    }

    if (docs) {
      res.send(docs);
    }
    */
  });

module.exports = router;
