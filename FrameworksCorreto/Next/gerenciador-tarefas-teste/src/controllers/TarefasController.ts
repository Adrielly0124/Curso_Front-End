import Tarefa from "../models/Tarefa";
import { connectDB } from "../services/mongodb";

const TarefasController = {
  async listar() {
    await connectDB();
    return await Tarefa.find();
  },
  async criar(data: any) {
    await connectDB();
    const nova = new Tarefa(data);
    await nova.save();
    return nova;
  },
  async atualizar(id: string, data: any) {
    await connectDB();
    return await Tarefa.findByIdAndUpdate(id, data, { new: true });
  },
  async deletar(id: string) {
    await connectDB();
    return await Tarefa.findByIdAndDelete(id);
  },
};

export default TarefasController;
