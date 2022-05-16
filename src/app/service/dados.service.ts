import { Injectable } from '@angular/core';
import { Idados } from '../models/Idados.models';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  bebidas: Idados[];
  lanches: Idados[];
  sobremesas: Idados[];
  entradas: Idados[];
  pratos: Idados[];
  registro: Idados;


  constructor() {
     this.bebidas=[
       {nome:'Cítrico primavera', valor: 'R$ 5,00', mensagem:'Gim com frutas cítricas', url:'/assets/imagens/bebidas/Bebida-1.jpg'},
       {nome:'Frescor da manhã', valor: 'R$ 8,00', mensagem:'Vodka, Água com gás, licor', url:'/assets/imagens/bebidas/Bebida-2.jpg'},
       {nome:'Ciciliano do prazer', valor: 'R$ 8,00', mensagem:'Suco de limão + cachaça', url:'/assets/imagens/bebidas/Bebida-3.jpg'},
       {nome:'Chicletinho', valor: 'R$ 8,00', mensagem:'Aguardente com sabores', url:'/assets/imagens/bebidas/Bebida-4.jpg'},
       {nome:'Boa vida', valor: 'R$ 8,00', mensagem:'Whisk + vinho do porto', url:'/assets/imagens/bebidas/Bebida-5.jpg'}];

       this.lanches=[{nome:'Presuntão', valor:'R$ 10,00', mensagem:'Pão +hamburgue + Presunto', url:'/assets/imagens/lanches/Lanche-1.jpg'},
       {nome:'Crocante', valor:'R$ 15,00', mensagem:'Pão + Baycon + Hamburgue', url:'/assets/imagens/lanches/Lanche-2.jpg'},
       {nome:'Combo Master', valor:'R$ 15,00', mensagem:'Pão com super Hamburgue', url:'/assets/imagens/lanches/Lanche-3.jpg'},
       {nome:'Nordestino', valor:'R$ 12,00', mensagem:'Pão + Carne de sol + Queijo', url:'/assets/imagens/lanches/Lanche-4.jpg'},
       {nome:'Submarino', valor:'R$ 15,00', mensagem:'Pão + Frango + Salada', url:'/assets/imagens/lanches/Lanche-5.jpg'},
      ];

      this.sobremesas=[{nome:'Napolitano', valor:'R$ 5,00', mensagem:'Pudim de morango', url:'/assets/imagens/sobremesas/Sobremesa-1.jpg'},
      {nome:'Pudim', valor:'R$ 4,00', mensagem:'pudin de balnilha', url:'/assets/imagens/sobremesas/Sobremesa-2.jpg'},
      {nome:'Napolitano extra', valor:'R$ 5,00', mensagem:'Pudim dois sabores', url:'/assets/imagens/sobremesas/Sobremesa-3.jpg'},
      {nome:'Biz extra', valor:'R$ 4,00', mensagem:'Biz com Leite condensado', url:'/assets/imagens/sobremesas/Sobremesa-4.png'},
      {nome:'Torta de limão', valor:'R$ 5,00', mensagem:'Torta de limão', url:'/assets/imagens/sobremesas/torta-limao.jpg'},
     ];

     this.entradas=[
       {nome:'Flor de caktos', valor:'R$ 10,00', mensagem:'Pão recheado com tomate', url:'/assets/imagens/entradas/Entrada-1.webp'},
       {nome:'Sabor do mar', valor:'R$ 12,00', mensagem:'Risoto com morango e camarão', url:'/assets/imagens/entradas/Entrada-2.jpg'},
        {nome:'Cristal da casa', valor:'R$ 11,00', mensagem:'Massa salgada caramelizada', url:'/assets/imagens/entradas/Entrada-3.jpg'},
       {nome:'Apetitosa', valor:'R$ 14,00', mensagem:'Massa com especiarias', url:'/assets/imagens/entradas/Entrada-4.webp'},
       {nome:'Master chef', valor:'R$ 10,00', mensagem:'Torrada com ovos e tomate', url:'/assets/imagens/entradas/Entrada-5.jpg'},
    ];

    this.pratos=[
      {nome:'Comercial', valor:'R$ 12,00', mensagem:'Feijão, arroz, salada, bife', url:'/assets/imagens/pratos/Prato-1.webp'},
    {nome:'Executivo', valor:'R$ 15,00', mensagem:'Feijao, arroz, salada, Bife', url:'/assets/imagens/pratos/Prato-2.jpg'},
    {nome:'Gerente', valor:'R$ 20,00', mensagem:'Picanha, feijão, arroz, fritas, salada', url:'/assets/imagens/pratos/Prato-3.jpg'},
    {nome:'Frango master', valor:'R$ 10,00', mensagem:'Feijão, frango, arroz, fritas', url:'/assets/imagens/pratos/Prato-4.png'},
    {nome:'Peixe assado', valor:'R$ 12,00', mensagem:'Tilápia, feijão, arroz, fritas', url:'/assets/imagens/pratos/Prato-5.jpg'},
   ];
  }

  atualizarDados(dado: Idados){
    this.registro = dado;
  }
}
