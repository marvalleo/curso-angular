import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  heroeBorrado: string =''; 
  
  borrarHeroe(){
    console.log('Borrando...');
    //this.heroes = ['Spiderman', 'Ironman', 'Hulk'];
    
    this.heroeBorrado = this.heroes.shift() || '';
  

  }

}
