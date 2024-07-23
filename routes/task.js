const express = require("express");
const router = express.Router();
const Task = require("../model/Task");

//post
router.post("/add", async (req, res) => {
  const { task, date, status } = req.body;

  if (!task || !date || !status) {
    return res
      .status(404)
      .json({ message: "Please provide all required input" });
  }

  try {
    const newTask = new Task({ task, date, status });
    await newTask.save();
    res.status(201).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});

//get

router.get("/all", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
});

//delete

module.exports = router;
