import express from "express";

const petsRouter = express.Router();

const pets = [];

petsRouter.use("/", (req, res, next) => {
  console.log(`Method: ${req.method}`);
  next();
});

petsRouter.get("/", (req, res) => {
  res.send(pets);
});

petsRouter.post("/", (req, res) => {
  const pet = req.body;
  pet.id = pets.length + 1;
  pets.push(pet);
  
  res.status(201);
  res.send(pet);
});

export default petsRouter;
