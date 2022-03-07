import { Card } from './card';

export class CardJob extends Card {
  cargoExercido: string;
  nomeEmpresa: string;

  constructor(anoInicio: number, localizacao: string, descricao: string, cargo: string, nomeEmpresa: string , anoFinal?: number) {
    super();

    this.anoInicio = anoInicio;
    this.localizacao = localizacao;
    this.descricao = descricao;
    this.anoFinal = anoFinal;
    this.cargoExercido = cargo;
    this.nomeEmpresa = nomeEmpresa;
  }
}
