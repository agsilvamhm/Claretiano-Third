import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';
import { Idados } from 'src/app/models/Idados.models';

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

  async showRegistro(objeto: Idados){
    this.dados.atualizarDados(objeto);
    this.route.navigateByUrl('exibir');
}
}
