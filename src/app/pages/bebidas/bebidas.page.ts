import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DadosService } from 'src/app/service/dados.service';
import { Idados } from 'src/app/models/Idados.models';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
   bebidas: any;

  constructor(private dados: DadosService, private route: Router) {
    this.bebidas = dados.bebidas;
  }

  ngOnInit() {
  }

  async showRegistro(objeto: Idados){
      this.dados.atualizarDados(objeto);
      this.route.navigateByUrl('exibir');
  }

}
