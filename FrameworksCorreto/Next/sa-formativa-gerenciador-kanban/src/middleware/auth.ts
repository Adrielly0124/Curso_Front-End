import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "segredo";

export function verifyToken(req: NextRequest, allowedRoles: string[] = []) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ message: "Token não informado" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded: any = jwt.verify(token, SECRET);
    if (allowedRoles.length > 0 && !allowedRoles.includes(decoded.role)) {
      return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
    }
    return decoded;
  } catch (err) {
    return NextResponse.json({ message: "Token inválido" }, { status: 401 });
  }
}
