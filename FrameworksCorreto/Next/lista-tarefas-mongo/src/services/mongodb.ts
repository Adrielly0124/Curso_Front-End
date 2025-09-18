import mongoose, { mongo } from "mongoose";

//converte string para URL
const MongoUri = process.env.DATABASE_URL;

//verifica se o .env.local esta declarado
if (!MongoUri) { //verifica a nulidade de uma variavel
  throw new Error("Defina o DATABASE_URL no .env.local");
}

//criar uma variável para armazenar o cache do sistema

let cached = (global as any).mongoose;//vai armazenar previamente do global do node, caso já exista uma comexão com o mongoDB

//caso não exista uma conexão previamente estabelecida
if (!cached) {
  cached = (global as any).mongoose = { conectada: null, promessa: null };
}

//função de conexão com o MongoDB
async function connectMongo() {
    //verifica se a conexão já existe, se já existe, retorna a própria conexão
    if(cached.conectada) return cached.conectada;

    //verifica se existe uma promessa de conexão
    if(!cached.promessa) {//se nula
        const aguarde = { bufferCommands: false};//desativo o buffer de comandos do mongoose
        //caso ocorra a perda de conexão
        //cria uma nova promessa de conexão
        cached.promessa = mongoose.connect(MongoUri!, aguarde)
            .then((mongoose) => {
                console.log("Conectado ao MongoDB");
                return mongoose;
            })
    }
    //estabelecer a conexão
    try{
        //cria a conexão a partir da promesa que estava pendente
        cached.conectada = await cached.promessa;
    }catch(error){
        //caso ocorra algum erro
        cached.promessa = null;//limpo a promessa de conexão
        throw error;
    }

    //a conexão foi estabelecida
    return cached.conectada;

}

//transforma em um componente reutilizável
export default connectMongo;

//1º Passo -> criar o endereço da conexão
//2º Passo -> criar o cached, para armazenar as conexões ao longo do projeto
//3º Passo -> verificar se já existe uma conexão estabelecida com DB
//4º Passo -> criar uma promessa de conexão , caso ainda não exista
//5º Passo -> transformar a promessa em uma conexão estabelecida