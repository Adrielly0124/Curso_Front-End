"use client";
import React, { useState } from "react";

export default function ProjetoForm() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Projeto "${nome}" criado com sucesso!`);
    setNome("");
    setDescricao("");
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
        maxWidth: "500px",
      }}
    >
      <h3>Cadastrar Projeto</h3>
      <input
        type="text"
        placeholder="Nome do projeto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        required
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        style={{ width: "100%", margin: "10px 0", padding: "8px" }}
      />
      <button
        type="submit"
        style={{
          background: "#2563eb",
          color: "white",
          padding: "8px 14px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Salvar
      </button>
    </form>
  );
}
