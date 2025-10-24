// src/app/components/KanBanBoard.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

type Tarefa = { _id: string; titulo: string; status: 'A FAZER' | 'EM ANDAMENTO' | 'CONCLUÍDO' };

export default function KanBanBoard() {
  const [tasks, setTasks] = useState<Tarefa[]>([]);

  // mock inicial ou buscar da API
  useEffect(() => {
    // você pode trocar por fetch('/api/tarefas') quando API existir
    setTasks([
      { _id: '1', titulo: 'Criar wireframe', status: 'A FAZER' },
      { _id: '2', titulo: 'Codar API backend', status: 'EM ANDAMENTO' },
      { _id: '3', titulo: 'Publicar site', status: 'CONCLUÍDO' },
    ]);
  }, []);

  const columns = ['A FAZER', 'EM ANDAMENTO', 'CONCLUÍDO'];

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    const id = result.draggableId;
    const dest = result.destination.droppableId as Tarefa['status'];

    setTasks(prev => prev.map(t => t._id === id ? { ...t, status: dest } : t));

    // opcional: atualizar no backend (PUT /api/tarefas/:id)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', gap: 16 }}>
        {columns.map(col => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ flex: 1, minHeight: 400, background: '#fff', padding: 12, borderRadius: 8 }}>
                <h3>{col}</h3>
                {tasks.filter(t => t.status === col).map((t, idx) => (
                  <Draggable key={t._id} draggableId={t._id} index={idx}>
                    {(prov) => (
                      <div ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps} style={{ padding: 12, margin: '8px 0', background: '#f1f5f9', borderRadius: 6, ...prov.draggableProps.style }}>
                        {t.titulo}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
