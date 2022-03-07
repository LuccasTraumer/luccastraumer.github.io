import { Card } from './card';

export class CardEducation extends Card {
  nivelEscolaridade: string;
  nomeInstituicao: string;

  constructor(anoInicio: number, localizacao: string, descricao: string,
              nivelEscolaridade: string, nomeInstituicao: string , anoFinal?: number) {
    super();

    this.anoInicio = anoInicio;
    this.localizacao = localizacao;
    this.descricao = descricao;
    this.anoFinal = anoFinal;
    this.nivelEscolaridade = nivelEscolaridade;
    this.nomeInstituicao = nomeInstituicao;
  }
}
