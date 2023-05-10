import { Router } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from "bcryptjs";

const router = Router();
const db = require("../../database/models/index.js")

router.post("/login", asyncHandler(
  async (req, res) => {
    const {username, password} = req.body;
    const user = await db.Employee.findOne({where: {username}});
      console.log(user)
      if(user && (await bcrypt.compare(password,user.password))) {
        res.send(generateTokenReponse(user));
      }
      else{
        res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
      }
  
  }
))

router.get("/", asyncHandler(
  async (req, res) => {
    // const user = await UserModel.findAll();

  }
))

router.post("/", asyncHandler(
  async (req, res) => {
    
  }
))

router.put("/:id", asyncHandler(
  async (req, res) => {
    
  }
))

router.delete("/:id", asyncHandler(
  async (req, res) => {
    
  }
))

router.get("/:id", asyncHandler(
  async (req, res) => {
    
  }
))

const generateTokenReponse = (employee: any) => {
  const token = jwt.sign({
    id: employee.id, username:employee.username, isAdmin: employee.role == 'manager'
  },process.env.JWT_SECRET!,{
    expiresIn:"30d"
  });

  return {
    id: employee.id,
    email: employee.email,
    name: employee.name,
    address: employee.address,
    isAdmin: employee.role == "manager",
    token: token
  };
}



export default router;