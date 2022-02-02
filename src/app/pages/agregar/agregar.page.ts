import { ListaItem } from './../../models/lista-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  titulo: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private deseosService: DeseosService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( params =>{
        const { id } = params;
        this.lista = this.deseosService.obtenerLista( id );
      });
  }

  capturar(){
    if(this.titulo.length === 0) {return;}
    this.lista.items.push(new ListaItem(this.titulo) );
    this.deseosService.guardarStorage();
    this.titulo = '';
  }

  cambioEstadoCheck( item: ListaItem){
    console.log(item);
    const pendientes = this.lista.items.filter( i => i.completado === false).length;

    if(pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadoEn = new Date();
    }else{
      this.lista.terminada = false;
      this.lista.terminadoEn = null;
    }
    this.deseosService.guardarStorage();
  }

  eliminar( index: number){
    this.lista.items.splice(index, 1);
    this.deseosService.guardarStorage();
  }

}
