import { Component } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages: Array <{title: string; url: string; icon: string}>;
  constructor(private menu: MenuController) {
    menu.enable(true);

    this.pages = [{title:'Bebidas', url:'bebidas', icon: 'cafe'},
                  {title:'Lanches', url:'lanches', icon: 'pizza'},
                  {title:'Pratos: Entradas e refeições', url:'pratos', icon: 'fish'},
                  {title:'Prato do dia', url:'prato-dia', icon: 'fast-food'},
                  {title:'Sobremesa', url:'sobremesa', icon: 'ice-cream'}
  ];
 }
}
