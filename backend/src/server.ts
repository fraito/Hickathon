import dotenv from "dotenv"
dotenv.config();

import express from "express";
import cors from "cors";
import employeeRouter from "./routers/employee.router"
import abscenseRouter from "./routers/abscense.router"

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/employees", employeeRouter);
app.use("api/abscenses", abscenseRouter)

const port = 5000;
app.listen(port, () => {
    console.log("Served on http://localhost:" + port);
})