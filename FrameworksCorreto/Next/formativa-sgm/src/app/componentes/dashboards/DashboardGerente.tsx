"use-client";

import { IOrdemServico } from "@/models/OrdemServico";
import { useEffect, useState } from "react";
import { IEquipamento } from "@/models/Equipamento";

export default function DashboardGerente() {
    const [ordens, setOrdens] = useState<IOrdemServico[]>([]);
    const [equipamentos, setEquipamentos] = useState<IEquipamento[]>([]);

    useEffect(() => {
        fetchOrdens();
        fetchEquipamentos();
    }, []);

    const fetchOrdens = async () => {
        try {
            const resposta = await fetch("/api/ordemservico");
            const data = await resposta.json();
            if (data.success) {
                setOrdens(data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEquipamentos = async () => {
        try {
            const resposta = await fetch("/api/equipamento");
            const data = await resposta.json();
            if (data.success) {
                setEquipamentos(data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Funções CRUD podem ser implementadas aqui (exemplo: deletar, editar, criar)

    return (
        <div>
            <h2>Dashboard do Gerente</h2>
            <section>
                <h3>Ordens de Serviço</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descrição</th>
                            <th>Status</th>
                            <th>Tipo de Manutenção</th>
                            <th>Data Solicitação</th>
                            <th>Data Finalização</th>
                            <th>Id Equipamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordens.map((ordem) => (
                            <tr key={ordem._id}>
                                <td>{ordem.titulo}</td>
                                <td>{ordem.descricao}</td>
                                <td>{ordem.status}</td>
                                <td>{ordem.tipoManutencao}</td>
                                <td>{new Date(ordem.dataSolicitada).toLocaleDateString()}</td>
                                <td>{ordem.dataFinalizada ? new Date(ordem.dataFinalizada).toLocaleDateString() : "-"}</td>
                                <td>{ordem.equipamentoId}</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section>
                <h3>Equipamentos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Localização</th>
                            <th>Status</th>
                            <th>Número de Série</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipamentos.map((equip) => (
                            <tr key={equip._id}>
                                <td>{equip.modelo}</td>
                                <td>{equip.marca}</td>
                                <td>{equip.localizacao}</td>
                                <td>{equip.status ? "Ativo" : "Inativo"}</td>
                                <td>{equip.numSerie}</td>
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