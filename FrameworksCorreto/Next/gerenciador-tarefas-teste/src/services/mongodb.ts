import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/gerenciador-tarefas";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.error("Erro na conexão MongoDB:", err);
  }
}
