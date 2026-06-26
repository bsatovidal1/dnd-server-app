import type { Request, Response } from 'express';
import UserModel from './model.js';

export async function CreateUser(req: Request, res: Response) {
  const user = new UserModel(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function GetUser(req: Request, res: Response) {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function UpdateUser(req: Request, res: Response) {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
}
