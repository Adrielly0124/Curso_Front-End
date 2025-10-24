// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/services/mongodb';
import Usuario from '@/models/Usuario';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { email, senha } = body;
    const user = await Usuario.findOne({ email });
    if (!user) return NextResponse.json({ erro: 'Usuário não encontrado' }, { status: 401 });
    const ok = await bcrypt.compare(senha, user.senha);
    if (!ok) return NextResponse.json({ erro: 'Senha incorreta' }, { status: 401 });
    return NextResponse.json({ id: user._id, nome: user.nome, tipo: user.tipo });
  } catch (err: any) {
    return NextResponse.json({ erro: err.message }, { status: 500 });
  }
}
