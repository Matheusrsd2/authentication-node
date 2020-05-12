const jwt = require("jsonwebtoken");
const User = require("./../models/user");

exports.register = async (data) => {
  const hasUser = await User.findOne({ email: data.email });

  if (hasUser) {
    return null;
  }

  const user = new User({ name: data.name, email: data.email });

  user.password = user.generateHash(data.password);

  await user.save();

  return {
    user: {
      id: user.id,
      email: user.email,
      signUpDate: user.signUpDate,
    },
  };
};

exports.login = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (!user) {
    return null;
  }

  if (!user.validPassword(data.password)) {
    return null;
  }


  console.log(process.env.SECRET);
  
  return {
    user: {
      id: user.id,
      email: user.email,
      signUpDate: user.signUpDate,
    },
    token: jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 120 }),
  };
};
