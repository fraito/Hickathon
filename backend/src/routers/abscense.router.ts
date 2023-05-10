import { Router } from "express";
import asyncHandler from "express-async-handler";

const router = Router()
const db = require("../../database/models/index.js")

router.get("/", asyncHandler(
    async (req, res) => {
      const abscenses = await db.AbscenseRequest.findAll();
      res.json(abscenses)
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

  export default router;