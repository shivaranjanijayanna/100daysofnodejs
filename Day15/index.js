import express from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import { Student } from "./schema.js";

dotenv.config();
const port = 3001;
const app = express();
app.use(express.json());

const uri = process.env.MONGODBURI;

//CREATE
app.post("/student", async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(200).send(savedStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

//READ
app.get("/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(400).send(err);
  }
});

//UPDATE
app.put("/student/:id", async (req, res) => {
  try {
    const updatestudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatestudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

//DELETE
app.delete("/student/:id", async (req, res) => {
  try {
    const deletestudent = await Student.findByIdAndDelete(req.params.id);
    res.send(deletestudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

mongoose.connect(uri);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
