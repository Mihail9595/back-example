import express from "express";
import petsRouter from "./routes/pets.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Привет"));
app.use("/pets", petsRouter);

app.listen("3000", () => console.log("Сервер работает"));
