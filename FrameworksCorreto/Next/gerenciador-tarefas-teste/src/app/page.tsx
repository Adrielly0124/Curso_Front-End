// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  // opcional: redirecionar automaticamente para /login
  // redirect('/login');
  return (
    <main style={{padding:40}}>
      <h1>Gerenciador de Tarefas</h1>
      <p>
        Abra <a href="/login">/login</a> para acessar o sistema.
      </p>
    </main>
  );
}
