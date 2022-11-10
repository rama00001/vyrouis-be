const User_info = require("../model/auth_schema");
const Bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");


const register = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User_info({
      username, email, password
    });

    const result = await user.save()
    res.json(result);

  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (!username || !password) {
    return res.status(401).json({ message: 'Username or Password missing' });
  }
  User_info.findOne({ username: username }, (err, user) => {
    if (err) {
      return res.json({ err });
    }
    if (user !== null) {
      if (password == user.password) {
        res.json({ user });
      } else {
        res.status(401).json({ message: 'Incorrect Password' })
      }
    }
    else {
      res.status(404).json({ result: 'user not found' })
    }
  })

}



module.exports = {
  register,
  login
};



