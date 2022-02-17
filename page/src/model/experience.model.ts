export class Experience {
  anoInicio: number;
  anoTermino?: number;
  nomeEmpresa: string;
  cargo: string;

  constructor(anoInicio: number, nomeEmpresa: string, cargo: string, anoTermino?: number) {
    this.anoInicio = anoInicio;
    this.anoTermino = anoTermino;
    this.nomeEmpresa = nomeEmpresa;
    this.cargo = cargo;
  }
}
