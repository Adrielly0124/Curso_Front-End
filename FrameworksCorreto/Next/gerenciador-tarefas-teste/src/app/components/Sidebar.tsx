"use client";
import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#334155",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>Menu</h2>
      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link href="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
          📋 Painel Kanban
        </Link>
        <Link href="/projetos" style={{ color: "#fff", textDecoration: "none" }}>
          📁 Projetos
        </Link>
        <Link href="/tarefas" style={{ color: "#fff", textDecoration: "none" }}>
          ✅ Tarefas
        </Link>
      </nav>
    </aside>
  );
}
