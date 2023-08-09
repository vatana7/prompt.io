import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    unique: [true, 'Username already exists!'],
    match: [/^[a-zA-Z0-9]+$/, 'Username is invalid!'],
  },
  image: {
    type: String,
    required: [true, 'Image is required!'],
  },
});

const User = models.User || model('User', UserSchema);

export { User };
