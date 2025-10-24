import mongoose, { Schema, Document } from 'mongoose';

export interface IProjeto extends Document {
  titulo: string;
  descricao?: string;
  dataCriacao: Date;
}

const ProjetoSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  dataCriacao: { type: Date, default: Date.now },
});

export default mongoose.models.Projeto || mongoose.model<IProjeto>('Projeto', ProjetoSchema);
