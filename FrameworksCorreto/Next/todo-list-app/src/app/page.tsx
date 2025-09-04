//Indicar que é um componente do Cliente Side 
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tarefas, setTarefas] = useState([]); //manipulador da lista de tarefas
  const [newTarefa, setNewTarefa] = useState(""); //manipulador do Input do Formulário

  //use Effect - Executa uma função sempre que uma variável mudar(faz antes de carregas a página)

  useEffect(()=>{fetchTarefas();},[]);
  //UseEffect para preencher a lista de tarefas enquanto carrega a página

  //método para pegar todas as tarefas da coleção no mongoDB
  const fetchTarefas = async () => {
    const response = await fetch("/api/tarefas");
    const data = await response.json();
    setTarefas(data);
  }

  async function addtarefas() {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
        body: JSON.stringify({ nome: newTarefa }),
    });
    const data = await response.json();
    setTarefas([...tarefas, data.data]);
  }
}