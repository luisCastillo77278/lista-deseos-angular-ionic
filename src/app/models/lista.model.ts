import { ListaItem } from './lista-item.model';
import { v4 as uuid } from 'uuid';

export class Lista {

  public titulo: string;
  public id: string;
  creadoEn: Date;
  terminadoEn: Date;
  terminada: boolean;
  items: ListaItem[];

  constructor(
    titulo: string,
  ){
    this.titulo = titulo;
    this.creadoEn = new Date();
    this.terminada = false;
    this.items = [];
    this.id = uuid();
  }

}
