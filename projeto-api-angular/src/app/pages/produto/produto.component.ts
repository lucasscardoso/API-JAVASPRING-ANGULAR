import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/interfaces/produtos';

import { ConexaoApiService } from 'src/app/services/produtoService.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutosComponent {

  constructor(private conexaoApi:ConexaoApiService,private router:Router){}
  //tabela
  dadosRecebidos: Produtos[] = [] ;


  
  
  produtosForm = new FormGroup({
   
    id: new FormControl(0),
    codigoBarras: new FormControl(''),
    nome: new FormControl(''),
    preco: new FormControl(0)
  })

 
 
  ngOnInit(){
    this.exibeDados();
    
    }

  exibeDados(){
    this.conexaoApi.getDados().subscribe(data => {
       this.dadosRecebidos = data;
       console.log(this.dadosRecebidos);
    });
  }



  excluircomp(id:number){
    Swal.fire({
      title: 'Tem certeza que deseja Exluir o produto?',
      text: "Voce não vai poder reverter essa alteração!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#808080',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sm,Desejo excluir!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.conexaoApi.excluir(id).subscribe(produto =>{
          this.dadosRecebidos = this.dadosRecebidos.filter((produto) => produto.id != id);
        })
        Swal.fire(
          'Produto Excluido',
          'Seu produto foi exluido.',
          'success'
        )
      }
    })
    
    this.router.navigate(['']);
  }


  home(){
   
    this.router.navigate(['']);
  }
}
  


 /* editarProduto(id: number) {
    let produtoAtual = this.produtos.find((produtos) => {return produtos.id === id});
    console.log(produtoAtual);
  }*/

  /*const produto: Partial <Produtos> = this.produtosForm.value as Produtos;
    this.conexaoApi.alteraDados(produto).subscribe(produto =>{
      this.produtosForm = this.produtosForm.filter((produto) => produto.id != id);*/