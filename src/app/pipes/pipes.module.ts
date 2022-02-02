import { NgModule } from '@angular/core';
import { ListaPipe } from './lista.pipe';



@NgModule({
  declarations: [
    ListaPipe
  ],
  exports: [
    ListaPipe
  ]
})
export class PipesModule { }
