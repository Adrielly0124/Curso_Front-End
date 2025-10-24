import dbConnect from "@/lib/dbConnect";
import Task from "@/models/Task";

export const createTask = async (req: any, res: any) => {
  await dbConnect();
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

export const getTasks = async (req: any, res: any) => {
  await dbConnect();
  const tasks = await Task.find().populate("project").populate("assignedTo");
  res.status(200).json(tasks);
};

export const updateTask = async (req: any, res: any) => {
  await dbConnect();
  const { id } = req.query;
  const { status, userId, userRole } = req.body;

  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ message: "Tarefa não encontrada" });

  if (userRole === "membro" && task.assignedTo.toString() !== userId) {
    return res.status(403).json({ message: "Acesso negado" });
  }

  task.status = status;
  await task.save();
  res.status(200).json(task);
};
