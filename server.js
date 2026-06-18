import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Привет"));

app.listen("3000", () => console.log("Сервер работает"));
