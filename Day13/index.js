import express from "express";

const app = express();
const port = 3001;

app.use(express.json());

let tasks = [
  { id: 1, title: "Learn REST API", completed: false },
  { id: 2, title: "Build a project", completed: true },
];

app.post("/tasks", (req, res) => {
  const { title, completed } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: completed || false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, completed } = req.body;
  if (title) {
    task.title = title;
  }
  if (completed != undefined) {
    task.completed = completed;
  }

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (taskIndex === -1)
    return res.status(404).json({ error: "Task not found" });

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
