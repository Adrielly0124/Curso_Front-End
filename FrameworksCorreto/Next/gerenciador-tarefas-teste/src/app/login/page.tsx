// src/app/login/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // chama sua rota de login; se não tiver, este fetch falhará (ver abaixo)
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    if (res.ok) {
      const user = await res.json();
      // salva usuário (simples)
      localStorage.setItem('usuario', JSON.stringify(user));
      router.push('/dashboard');
    } else {
      const err = await res.json();
      alert(err?.erro || 'Erro no login');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
      <form onSubmit={handleSubmit} style={{ width: 420, padding: 28, borderRadius: 8, background: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
        <h2 style={{ marginBottom: 18 }}>Login</h2>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" required style={{ width: '100%', padding: 10, margin: '8px 0 12px' }} />
        <label>Senha</label>
        <input value={senha} onChange={e => setSenha(e.target.value)} type="password" required style={{ width: '100%', padding: 10, margin: '8px 0 16px' }} />
        <button type="submit" style={{ width: '100%', padding: 10, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Entrar</button>
      </form>
    </div>
  );
}
