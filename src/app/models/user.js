const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    default: "",
    unique: [true, "email must be unique"],
    required: true,
  },
  password: { type: String, default: "", required: true },
  idDeleted: { type: Boolean, default: false },
  signUpDate: { type: Date, default: Date.now() },
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
