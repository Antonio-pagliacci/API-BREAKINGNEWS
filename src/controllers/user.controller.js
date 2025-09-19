import userService from '../services/user.service.js';

const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).json({ err: "Submit all fields for registration." });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).json({ err: "Error creating user" });
    }

    res.status(201).json({
      message: "User creatad successfully.",
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();
    if (users.length === 0) {
      return res.status(400).json({ err: "There are no registered users." });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).json({ err: "Submit at least one field to update.." });
    }
    const { id, user } = req;

    await userService.upateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );
    res.json({ message: "User successfuly updated." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  create,
  findAll,
  findById,
  update,
};
