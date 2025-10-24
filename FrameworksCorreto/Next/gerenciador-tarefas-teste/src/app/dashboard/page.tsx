// src/app/dashboard/page.tsx
'use client';
import Link from 'next/link';
import KanBanBoard from '../components/KanBanBoard';

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 220, background: '#1f2937', color: '#fff', padding: 20 }}>
        <h3>RHConnect</h3>
        <nav style={{ marginTop: 20 }}>
          <div style={{ margin: '12px 0' }}><Link href="/dashboard">Painel Kanban</Link></div>
          <div style={{ margin: '12px 0' }}><Link href="/projetos">Projetos</Link></div>
          <div style={{ margin: '12px 0' }}><Link href="/tarefas">Tarefas</Link></div>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 24, background: '#f8fafc' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h1>Quadro Kanban</h1>
          <div>Olá, usuário • <button onClick={() => { localStorage.removeItem('usuario'); window.location.href = '/login' }} style={{ marginLeft: 12 }}>Sair</button></div>
        </header>

        <KanBanBoard />
      </main>
    </div>
  );
}
