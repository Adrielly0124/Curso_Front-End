import { kMaxLength } from "buffer";
import mongoose from "mongoose";
import Script from "next/script";
import { type } from "os";

//arrow function

const TodoSchema = new mongoose.Schema({
    titulo: {
        type: Script,
        required: [true, "O título é obrigatório"], //adiciona mensagem de erro
        trim: true, //remove espaços antes e depois(brancos)
        Maxlength: [100, "Max 100 char"] //mensagem de erro 
    },
    concluída: {
        type: Boolean,
        default: false, //o padrão é que seja  false
    },
    criadaEm: {
        type: Date,
        default: Date.now, //data atual
    }
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
//cria um modelo Todo caso já não exista
//se o modelo já existe usa o Todo
//se não existe cria um novo Schema para oo Banci de dados Chamado TodoSchema
