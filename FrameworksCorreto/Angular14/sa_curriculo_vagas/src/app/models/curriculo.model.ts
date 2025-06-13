export class Curriculo {
  constructor(
    public nome: string,
    public email: string,
    public telefone: string,
    public foto: string,
    public dataNascimento: string,
    public dependentes: boolean,
    public estadoCivil: string,
    public endereco: string,
    public formacao: string,
    public idiomas: string,
    public cursos: string,
    public areaInteresse: string,
    public objetivo: string,
    public habilidades: string,
    public disponibilidade: boolean,
    public experiencia: string,
    public id?: number
  ) {}

  static fromMap(data: any): Curriculo {
    return new Curriculo(
      data.nome,
      data.email,
      data.telefone,
      data.foto,
      data.dataNascimento,
      data.dependentes,
      data.estadoCivil,
      data.endereco,
      data.formacao,
      data.idiomas,
      data.cursos,
      data.areaInteresse,
      data.objetivo,
      data.habilidades,
      data.disponibilidade,
      data.experiencia,
      data.id
    );
  }
}
