import mongoose, { Schema, Document } from 'mongoose';

export interface ITarefa extends Document {
  titulo: string;
  descricao?: string;
  status: 'A FAZER' | 'EM ANDAMENTO' | 'CONCLUÍDO';
  idProjeto: string;
  idUsuario: string;
}

const TarefaSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  status: { type: String, enum: ['A FAZER','EM ANDAMENTO','CONCLUÍDO'], default: 'A FAZER' },
  idProjeto: { type: Schema.Types.ObjectId, ref: 'Projeto', required: true },
  idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
});

export default mongoose.models.Tarefa || mongoose.model<ITarefa>('Tarefa', TarefaSchema);
