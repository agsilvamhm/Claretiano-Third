import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {
  pratos: any;

  constructor(private dados: DadosService, private route: Router) {
    this.pratos = dados.pratos;
   }

  ngOnInit() {
  }

  async showPratos(objeto: any){
    this.route.navigateByUrl(objeto.url);
  }
}
