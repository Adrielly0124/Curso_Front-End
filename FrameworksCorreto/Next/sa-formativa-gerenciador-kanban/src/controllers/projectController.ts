import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";

export const createProject = async (req: any, res: any) => {
  await dbConnect();
  const { name, description, createdBy } = req.body;
  const project = await Project.create({ name, description, createdBy });
  res.status(201).json(project);
};

export const getProjects = async (req: any, res: any) => {
  await dbConnect();
  const projects = await Project.find();
  res.status(200).json(projects);
};
