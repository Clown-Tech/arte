const router = require('express').Router();
const AddImage = require('../models').models.AddImage;
/*
mailing.get('/mailing/:id', async (req, res) => { });
mailing.get('/mailing', async (req, res) => { res.send('mailing') });
mailing.post('/mailing/:id', async (req, res) => { });
*/

//router.get('/mailing', async (req, res) => { res.send('hello world') });

router.get("/addImage", async (req, res) => {
  console.log("received!");
  res.send("received");
  /*
  AddImage.findOne({ email: req.body.email }).then(user => {
    console.log(user);
      res.send("found user");
  });
  */
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

router.post("/addImage", async (req, res) => {
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
      AddImage.insertMany(req.body, (error, docs) => {
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
