import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';
import { Idados } from 'src/app/models/Idados.models';

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

  async showRegistro(objeto: Idados){
    this.dados.atualizarDados(objeto);
    this.route.navigateByUrl('exibir');
}
}
