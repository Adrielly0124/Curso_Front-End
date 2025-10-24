import Usuario from "../models/Usuario";
import { connectDB } from "../services/mongodb";
import bcrypt from "bcryptjs";

export const UsuariosController = {
  async registrar(dados: any) {
    await connectDB();
    const senhaHash = await bcrypt.hash(dados.senha, 10);
    const novoUsuario = new Usuario({
      nome: dados.nome,
      email: dados.email,
      senha: senhaHash,
      tipo: dados.tipo,
    });
    await novoUsuario.save();
    return novoUsuario;
  },

  async login(email: string, senha: string) {
    await connectDB();
    const usuario = await Usuario.findOne({ email });
    if (!usuario) throw new Error("Usuário não encontrado");
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) throw new Error("Senha incorreta");
    return usuario;
  },
};
