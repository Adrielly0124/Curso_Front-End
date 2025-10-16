"use-client";

import { IOrdemServico } from "@/models/OrdemServico";
import { useEffect, useState } from "react";
import { IUsuario } from "@/models/Usuario";

export default function DashboardAdmin() {
    const [usuarios, setUsuarios] = useState<IUsuario[]>([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const resposta = await fetch("/api/usuario");
            const data = await resposta.json();
            if (data.success) {
                setUsuarios(data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Funções CRUD podem ser implementadas aqui (exemplo: deletar, editar, criar)

    return (
        <div>
            <h2>Dashboard do Administrador</h2>
            <section>
                <h3>Gerenciar Usuários</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Função</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario._id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.funcao}</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}