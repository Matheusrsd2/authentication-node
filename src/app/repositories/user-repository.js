const User = require("./../models/user");

exports.post = (data) => {
  const user = new User(data);

  return user.save();
};

exports.get = () => {
  return User.find();
};

exports.getById = (id) => {
  return User.findById(id);
};
