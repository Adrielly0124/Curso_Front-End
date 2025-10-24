// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Gerenciador de Tarefas',
  description: 'Kanban',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
