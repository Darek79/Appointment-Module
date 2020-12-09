const {Schema, model} = require("mongoose");
const {isEmail, isMobilePhone} = require("validator");
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "please provide your name"],
    minlength: [4, "name shoduld be longer then four letters"],
    unique: [true, "name is already taken"],
  },
  surname: {
    type: String,
    required: [true, "please provide a username"],
    minlength: [4, "name shoduld be longer then four letters"],
    unique: [true, "name is already taken"],
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return isEmail(v);
      },
      message: (v) => `${v} is not a valid email adress`,
    },
    required: [true, "please provide a valid email adress"],
  },
  telephone: {
    type: String,
    validate: {
      validator: function (v) {
        return isMobilePhone(v, "pl-PL");
      },
      message: (v) => `${v} is not a valid email adress`,
    },
    required: [true, "please provide a valid email adress"],
  },
});

const User = model("User", userSchema);

module.exports = User;
