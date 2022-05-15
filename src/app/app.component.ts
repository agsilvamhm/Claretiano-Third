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
                  {title:'Lanches', url:'lanches', icon: 'fast-food'},
                  {title:'Entradas', url:'entrada', icon: 'beer'},
                  {title:'Prato do dia', url:'prato-dia', icon: 'fish'},
                  {title:'Pratos', url:'pratos', icon: 'pizza'},
                  {title:'Sobremesas', url:'sobremesa', icon: 'ice-cream'}
  ];
 }
}
