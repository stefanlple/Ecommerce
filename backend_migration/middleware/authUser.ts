import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

import { NextFunction, Request, Response } from "express";

const auth = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            //get token from headers
            token = req.headers.authorization.split(" ")[1];
            //verify jwt
            const userID = jwt.verify(
                token,
                process.env.JWT_SECRETKEY as string
            );

            req.user = await User.findById(userID.id);
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("invalid token");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("no token");
    }
};

const authRoles = (role) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user.role === role) {
            next();
        } else {
            res.status(401);
            throw new Error("Only admin");
        }
    };
};

export { auth, authRoles };
