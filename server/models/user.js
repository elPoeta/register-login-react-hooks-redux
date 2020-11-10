import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    required: [true, 'e-mail is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ]
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: [true, 'password required'],
    minlength: 8,
    select: false,
    trim: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;