import { Request, Response } from "express";
import User from "../models/user.model";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    // check if the user exists
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });
    if (existingUser) {
      return res.status(200).send();
    }

    // create the user if it doesn't exist
    const newUser = new User(req.body);
    await newUser.save();

    // return the user object to the calling client
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating new user" });
  }
};

export default { createCurrentUser };
