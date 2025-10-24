import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import Project from "../../models/Project";
import Task from "../../models/Task";
import bcrypt from "bcryptjs";

async function seed() {
  await dbConnect();

  // Limpar banco
  await User.deleteMany({});
  await Project.deleteMany({});
  await Task.deleteMany({});

  // Criar usuários
  const password = await bcrypt.hash("123456", 10);

  const gerente = await User.create({
    name: "Gerente Exemplo",
    email: "gerente@rhconnect.com.br",
    password,
    role: "gerente",
  });

  const membro1 = await User.create({
    name: "Membro 1",
    email: "membro1@rhconnect.com.br",
    password,
    role: "membro",
  });

  const membro2 = await User.create({
    name: "Membro 2",
    email: "membro2@rhconnect.com.br",
    password,
    role: "membro",
  });

  // Criar projeto
  const projeto = await Project.create({
    name: "Projeto Inicial",
    description: "Projeto de teste inicial",
    createdBy: gerente._id,
  });

  // Criar tarefas
  await Task.create([
    {
      title: "Tarefa 1",
      description: "Tarefa atribuída a Membro 1",
      project: projeto._id,
      assignedTo: membro1._id,
      status: "A Fazer",
    },
    {
      title: "Tarefa 2",
      description: "Tarefa atribuída a Membro 2",
      project: projeto._id,
      assignedTo: membro2._id,
      status: "Em Andamento",
    },
  ]);

  console.log("Seed finalizado com sucesso!");
  process.exit(0);
}

seed();
