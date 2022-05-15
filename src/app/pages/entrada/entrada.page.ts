import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
  entradas: any;

  constructor(private dados: DadosService, private route: Router) {
    this.entradas = dados.entradas;
  }

  ngOnInit() {
  }

  async showEntradas(objeto: any){
    this.route.navigateByUrl(objeto.url);
  }
}
