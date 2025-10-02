//responsavel pela autenticação do usuário

import { autenticaUsuario } from "@/controllers/UsuarioController";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


//authOptions -> configura o nextAuth
export const authOptions: NextAuthOptions = {
    providers: [
        //adiconar as credenciais(email e senha)
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                senha: {label: "Senha", type: "password"}
            },
            async authorize(credentials){
                if(!credentials) return null;
                const user = await autenticaUsuario(credentials.email, credentials.senha);
                if(user){
                    return {
                        id: user._id, 
                        email: user.email,
                        nome: user.nome,
                        funcao: user.funcao
                     };
                }else{
                    return null;
                }
            }
        })
    ], callbacks: {
        //o token é criado quando o usuário faz o login
        async jwt({token, user}){
            if(user){
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({session, token});
    }
}