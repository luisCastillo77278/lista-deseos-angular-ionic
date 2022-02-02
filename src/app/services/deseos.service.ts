import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  createList( titulo: string ){
    const lista = new Lista( titulo );
    this.listas.push( lista );
    this.guardarStorage();

    return lista.id;
  }

  obtenerLista( id: string ){
    return this.listas.find( lista => lista.id === id);
  }

  guardarStorage(){
    localStorage.setItem('lista', JSON.stringify( this.listas ));
  }

  cargarStorage(){
    if(!localStorage.getItem('lista')) {return;}
    this.listas = JSON.parse(localStorage.getItem('lista')) || [];
  }

  eliminar( id: string ){
    this.listas = this.listas.filter( item => item.id !== id);
    this.guardarStorage();
  }

  editar(id: string, titulo: string){
    const lista = this.listas.find( item => item.id === id);
    lista.titulo = titulo;
    this.guardarStorage();
  }

}
