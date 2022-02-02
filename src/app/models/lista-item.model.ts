
export class ListaItem {

  public completado: boolean;
  public desc: string;

  constructor(
    desc: string
  ) {
    this.desc = desc;
    this.completado = false;
  }

}
