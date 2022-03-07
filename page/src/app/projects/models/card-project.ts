export class CardProject {
  nomeProjeto: string;
  cargo: string;
  descricao: string;
  pathImage: string;
  linkRepository?: string;


  constructor(nomeProjeto: string, cargo: string, descricao: string, pathImage: string, linkRep?: string) {
    this.nomeProjeto = nomeProjeto;
    this.cargo = cargo;
    this.descricao = descricao;
    this.pathImage = pathImage;
    this.linkRepository = linkRep;
  }
}
