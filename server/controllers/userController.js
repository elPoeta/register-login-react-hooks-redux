import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';

export const userRegister = asyncHandler(async (req, res, next) => {
  const { email, password, confirmPasword } = req.body;

  if (password !== confirmPasword) {
    res.status(400)
    throw new Error(`password and confirm password not match`)
  }
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    email,
    password
  });

  if (!user) {
    res.status(400)
    throw new Error('Invalid user data')
  }

  res.status(201)
    .json({
      _id: user._id,
      eamil: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
});
