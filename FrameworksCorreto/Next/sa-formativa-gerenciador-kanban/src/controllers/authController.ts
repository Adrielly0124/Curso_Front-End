import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/auth";

export const registerUser = async (req: any, res: any) => {
  await dbConnect();
  const { name, email, password, role } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "Usuário já existe" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword, role });
  const token = generateToken(user._id, user.role);

  res.status(201).json({ token, user });
};

export const loginUser = async (req: any, res: any) => {
  await dbConnect();
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Senha incorreta" });

  const token = generateToken(user._id, user.role);
  res.status(200).json({ token, user });
};
