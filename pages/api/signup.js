import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isLength from 'validator/lib/isLength';
import isEmail from 'validator/lib/isEmail';
import Cart from '../../models/Cart';

connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1.Validate name/email/password
    if (!isLength(name, { min: 3, max: 10 })) {
      return res.status(422).send('Name must be 3-10 characters long.');
    } else if (!isLength(password, { min: 6 })) {
      return res.status(422).send('Password must be at least 6 characters long.');
    } else if (!isEmail(email)) {
      return res.status(422).send('Email must be valid.');
    }

    // 2.Check if user exists in database
    const user = await User.findOne({ email });
    if (user) {
      return res.status(422).send(`User already exists with email ${email}`);
    }

    // 3.If not, hash their password
    const hash = await bcrypt.hash(password, 10);

    // 4.Create user
    const newUser = await new User({
      name,
      email,
      password: hash,
    }).save();

    // 5. Create cart for new user
    await new Cart({ user: newUser._id }).save();

    // 6. Create token for the user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // 7.Send back token
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in signup. Please try again.');
  }
};
