export class CardProject {
  nomeProjeto: string;
  cargo: string;
  descricao: string;
  pathImage: string;


  constructor(nomeProjeto: string, cargo: string, descricao: string, pathImage: string) {
    this.nomeProjeto = nomeProjeto;
    this.cargo = cargo;
    this.descricao = descricao;
    this.pathImage = pathImage;
  }
}
