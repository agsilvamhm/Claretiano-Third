import { Idados } from './../../models/Idados.models';
import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/service/dados.service';

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.page.html',
  styleUrls: ['./exibir.page.scss'],
})
export class ExibirPage implements OnInit {
    registro: Idados;

  constructor(private dados: DadosService) { }

  ngOnInit() {
    this.registro = this.dados.registro;
    console.log('Bebida ->', this.registro);
  }
}
