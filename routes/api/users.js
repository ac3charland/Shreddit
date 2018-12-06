const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////------ PASSPORT ROUTES -----------//////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


////////////------ USER SIGNUP ----------//////////
// POST new user route (optional, everyone has access)
// Req includes user obj with username and password
// Res includes user obj with id, username and token
router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

////////////------ USER LOGIN ----------///////////
///////////////////////////////////////////////////
// POST login route (optional, everyone has access)
// Req includes user obj with username and password
// Res includes user obj with id, username and token
// Res only returns if un and pw match user in db
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;
  if(!user.username) {
    return res.status(422).json({
      errors: {
        username: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});

/////////--- AUTHORIZATION CALL FOR PROTECTED ROUTES ---///////////////
///////////////////////////////////////////////////////////////////////
// Req includes user obj with username and password AND token in header
// Res includes user obj with id, username and token
// Res only returns if un and pw match user in db and token is valid
/////////////////////////////////////////////////////////////////////
//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

module.exports = router;