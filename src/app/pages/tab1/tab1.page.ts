import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async agregar(){
    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'lista',
          type: 'text',
          placeholder: 'agregar lista'
        }
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ()=>{
            console.log('cancelo');
          }
        },
        {
          text: 'crear',
          handler: (data)=>{
            if (data.lista.length === 0) {return;}
            const idLista = this.deseosService.createList(data.lista);
            this.router.navigate(['/tabs/tab1/agregar', idLista ]);
          }
        }
      ]
    });

    await alert.present();
  }

}
