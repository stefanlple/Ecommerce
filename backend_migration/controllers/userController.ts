import bcrypt from "bcrypt";
import { Request, Response } from "express";

import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await User.find();
    if (users) {
        res.status(200).json(users);
    } else {
        res.status(401);
        throw new Error("No users");
    }
});

const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const id = req.body.id;
    const user = await User.findById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401);
        throw new Error("No user");
    }
});

const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields");
    }
    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
        name: name,
        email: email,
        role: role,
        password: hashedPassword,
    });

    if (user) {
        res.status(201);
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateJWTToken(user.id),
            user: user,
        });
    }
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201);
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateJWTToken(user.id),
            user: user,
        });
    } else {
        res.status(400);
        throw new Error("Wrong Password or Email");
    }
});

const getUser = (req: Request, res: Response) => {
    res.status(200);
    res.json(req.user);
};

const generateJWTToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRETKEY as string, {
        expiresIn: "60d",
    });
};

export { getAllUsers, getUser, getUserById, loginUser, registerUser };
