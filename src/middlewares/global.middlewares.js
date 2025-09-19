import userService from'../services/user.service.js';
import mongoose from 'mongoose';

export const validId = (req, res, next) => {
 try{
   const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id." });
  }
  next();
}catch(err){
   res.status(500).json({message: err.message})
}
};

export const validUser = async (req, res, next) => {
  try {
    const {id} = req.params;
  const user = await userService.findByIdService(id);

  if (!user) {
    return res.status(400).json({ error: "User not found." });
  }

  req.id = id;
  req.user = user;
  next();
}catch(err){
  res.status(500).json({message: err.message})
}
};


