import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'lista',
  pure: false
})

export class ListaPipe implements PipeTransform {

  transform(lista: Lista[], filtrado: boolean ): Lista[] {
    return lista.filter( item => item.terminada === filtrado );
  }

}
