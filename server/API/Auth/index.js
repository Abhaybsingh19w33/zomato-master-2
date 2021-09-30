// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route     /signup
Des       Signup with email and password
Params    none
Access    Public
Method    POST  
*/
Router.post("/signup", async (req, res) => {
    try {
        await UserModel.findEmailAndPhone(req.body.credentials);

        //DB
        const newUser = await UserModel.create(req.body.credentials);

        //JWT Auth Token
        const token = newUser.generateJwtToken();

        // return
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
export default Router;