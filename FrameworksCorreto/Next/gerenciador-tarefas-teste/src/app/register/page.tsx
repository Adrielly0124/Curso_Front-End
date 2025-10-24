"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", tipo: "membro" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(res.ok ? "Cadastro realizado com sucesso!" : data.erro);
  };

  return (
    <div style={{ maxWidth: 400, margin: "80px auto" }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" onChange={e => setForm({ ...form, nome: e.target.value })} /><br />
        <input placeholder="E-mail" onChange={e => setForm({ ...form, email: e.target.value })} /><br />
        <input type="password" placeholder="Senha" onChange={e => setForm({ ...form, senha: e.target.value })} /><br />
        <select onChange={e => setForm({ ...form, tipo: e.target.value })}>
          <option value="membro">Membro</option>
          <option value="gerente">Gerente</option>
        </select><br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
