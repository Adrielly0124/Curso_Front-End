// escrevendo o MongoDB de forma segura e reutilizável (armazenando de cache)

//converte string para URL (URI)
const MongoUri = process.env.MONGODB_URL;

//verificar se existe um endereço URL
if(!MongoUri){
    throw new Error("Defina o DATABASE_URL no .env.local");
}