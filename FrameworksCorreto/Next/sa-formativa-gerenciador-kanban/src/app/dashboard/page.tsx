"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "../../styles/kanban.scss";

interface Task {
  _id: string;
  title: string;
  status: string;
  assignedTo: { _id: string; name: string };
}

interface User {
  _id: string;
  role: string;
}

const currentUser: User = {
  _id: "ID_DO_USUARIO_ATUAL", // Simule login real
  role: "membro", // ou "gerente"
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get("/api/tasks").then((res) => {
      // Membros só veem tarefas atribuídas a eles
      if (currentUser.role === "membro") {
        setTasks(res.data.filter((t: Task) => t.assignedTo._id === currentUser._id));
      } else {
        setTasks(res.data);
      }
    });
  };

  const statuses = ["A Fazer", "Em Andamento", "Concluído"];

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    const task = tasks.find((t) => t._id === draggableId);
    if (!task) return;

    const newStatus = destination.droppableId;

    // Atualiza status via API
    axios.patch(`/api/tasks?id=${task._id}`, {
      status: newStatus,
      userId: currentUser._id,
      userRole: currentUser.role,
    }).then(() => fetchTasks());
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-container">
        {statuses.map((status) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                className="kanban-column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>{status}</h3>
                {tasks
                  .filter((t) => t.status === status)
                  .map((task, index) => (
                    <Draggable draggableId={task._id} index={index} key={task._id}>
                      {(provided) => (
                        <div
                          className="kanban-task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <strong>{task.title}</strong>
                          <p>{task.assignedTo.name}</p>
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
