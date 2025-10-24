// app/layout.tsx
"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../styles/globals.scss";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (token && userStr) {
      setUser(JSON.parse(userStr));
    } else {
      router.push("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Kanban - Agência Criativa StartUp</h2>
        {user && (
          <div>
            <span>{user.name} ({user.role})</span>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
}
