export class DadosRedesSociais {
  pathImage: string;
  nomeRedeSocial: string;
  linkRedeSocial: string;
  altRedeSocial: string;

  constructor(pathImage: string, nomeRedeSocial: string,
              linkRedeSocial: string, altRedeSocial: string) {
    this.pathImage = pathImage;
    this.nomeRedeSocial = nomeRedeSocial;
    this.linkRedeSocial = linkRedeSocial;
    this.altRedeSocial = altRedeSocial;
  }
}
