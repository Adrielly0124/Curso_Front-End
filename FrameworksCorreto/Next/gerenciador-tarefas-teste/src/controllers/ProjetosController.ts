import Projeto from "../models/Projeto";
import { connectDB } from "../services/mongodb";

const ProjetosController = {
  async listar() {
    await connectDB();
    return await Projeto.find();
  },
  async criar(data: any) {
    await connectDB();
    const novo = new Projeto(data);
    await novo.save();
    return novo;
  },
  async atualizar(id: string, data: any) {
    await connectDB();
    return await Projeto.findByIdAndUpdate(id, data, { new: true });
  },
  async deletar(id: string) {
    await connectDB();
    return await Projeto.findByIdAndDelete(id);
  },
};

export default ProjetosController;
