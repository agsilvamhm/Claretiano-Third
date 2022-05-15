import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';
import { Idados } from 'src/app/models/Idados.models';

@Component({
  selector: 'app-sobremesa',
  templateUrl: './sobremesa.page.html',
  styleUrls: ['./sobremesa.page.scss'],
})
export class SobremesaPage implements OnInit {
  sobremesas: any;

  constructor(private dados: DadosService, private route: Router) {
    this.sobremesas = dados.sobremesas;
  }

  ngOnInit() {
  }

  async showRegistro(objeto: Idados){
    this.dados.atualizarDados(objeto);
    this.route.navigateByUrl('exibir');
}
}
