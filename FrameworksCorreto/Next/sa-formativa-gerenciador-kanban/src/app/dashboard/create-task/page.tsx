"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  _id: string;
  name: string;
}

interface User {
  _id: string;
  name: string;
  role: string;
}

const currentUser = {
  _id: "ID_DO_GERENTE",
  role: "gerente",
};

export default function CreateTask() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    axios.get("/api/projects").then((res) => setProjects(res.data));
    axios.get("/api/users").then((res) =>
      setUsers(res.data.filter((u: User) => u.role === "membro"))
    );
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("/api/tasks", {
      title,
      description,
      project: projectId,
      assignedTo,
      status: "A Fazer",
    });
    alert("Tarefa criada!");
  };

  if (currentUser.role !== "gerente") return <p>Acesso negado</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Tarefa</h2>
      <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
      <select value={projectId} onChange={(e) => setProjectId(e.target.value)}>
        <option value="">Selecione projeto</option>
        {projects.map((p) => <option key={p._id} value={p._id}>{p.name}</option>)}
      </select>
      <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
        <option value="">Selecione membro</option>
        {users.map((u) => <option key={u._id} value={u._id}>{u.name}</option>)}
      </select>
      <button type="submit">Criar</button>
    </form>
  );
}
