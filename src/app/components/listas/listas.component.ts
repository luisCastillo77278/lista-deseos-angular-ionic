import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() pagina: string;
  @Input() filtrar: boolean;

  constructor(
    private deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) { }

  get getLista(){
    return this.deseosService.listas;
  }

  ngOnInit() {}


  mover(id: string){
    this.router.navigate([`/tabs/${this.pagina}/agregar`, id]);
  }

  eliminar(item: Lista){
    this.deseosService.eliminar( item.id );
  }

  async editar(item: Lista){
    const alert = await this.alertController.create({
      header: 'cambio de titulo',
      inputs: [
        {
          type: 'text',
          name: 'titulo',
          placeholder: 'Nuevo titulo'
        }
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: ()=>{
            console.log('cancelar');
          }
        },
        {
          text: 'editar',
          handler: (data)=>{
            if(data.titulo.length === 0) {return;}
            this.deseosService.editar(item.id, data.titulo);
          }
        }
      ]
    });

    await alert.present();
  }

}
