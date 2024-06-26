import User from "../models/userModel.js";
export const createUser = async (req, res, next) => {
  const newUser = new User({
    userName: req.body.userName,
    password: req.body.password,
  });


  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ message: "Could not create user" }));
};

export const loginUser = async (req, res, next) => {
  User.findOne({ userName: req.body.userName })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user.password !== req.body.password) {
        return res.status(401).json({ message: "Incorrect password" });
      }
      res.json(user); 
    })
    .catch((err) => res.status(500).json({ message: "Could not login user" }));
};
