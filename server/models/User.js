const { Schema, model } = require('mongoose');
const studentsSchema = require('./Students');
const eventSchema = require('./Event');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    title: {
      type: String,
      minlength: 1,
      maxlength: 200
    },
    about: {
      type: String,
      minlength: 1,
      maxlength: 800
    },
    contacts: {
      type: String,
      minlength: 1,
      maxlength: 400
    },
    fullname: {
      type: String,
      minlength: 1,
      maxlength: 200
    },
    nb: {
      type: String,
      minlength: 1,
      maxlength: 400
    },
    students: [studentsSchema],
    events: [eventSchema]
    

  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;
