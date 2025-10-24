"use client";
import React from "react";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "20px" }}>Gerenciador de Tarefas</h1>
      <button
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={() => alert("Logout efetuado!")}
      >
        Sair
      </button>
    </header>
  );
}
