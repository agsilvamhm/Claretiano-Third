import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';
import { Idados } from 'src/app/models/Idados.models';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {
lanches: any;

  constructor(private dados: DadosService, private route: Router) {
    this.lanches = dados.lanches;
   }

  ngOnInit() {
  }

  async showRegistro(objeto: Idados){
    this.dados.atualizarDados(objeto);
    this.route.navigateByUrl('exibir');
}
}
