"use client";
import React, { useState } from "react";

export default function TarefaForm() {
  const [titulo, setTitulo] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tarefa "${titulo}" adicionada ao status "${status}"!`);
    setTitulo("");
    setStatus("todo");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <h3>Nova Tarefa</h3>
      <input
        type="text"
        placeholder="Título da tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ width: "100%", margin: "10px 0", padding: "8px" }}
      >
        <option value="todo">A Fazer</option>
        <option value="doing">Em Progresso</option>
        <option value="done">Concluído</option>
      </select>
      <button
        type="submit"
        style={{
          background: "#22c55e",
          color: "white",
          padding: "8px 14px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Adicionar
      </button>
    </form>
  );
}
