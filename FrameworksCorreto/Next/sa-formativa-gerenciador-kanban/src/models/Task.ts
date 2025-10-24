import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  project: string;
  assignedTo: string;
  status: "A Fazer" | "Em Andamento" | "Concluído";
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["A Fazer", "Em Andamento", "Concluído"], default: "A Fazer" },
}, { timestamps: true });

export default mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);
