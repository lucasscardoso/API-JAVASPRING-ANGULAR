import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/interfaces/produtos';
import { ConexaoApiService } from 'src/app/services/produtoService.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent {

constructor(private conexaoApi:ConexaoApiService,private route: ActivatedRoute,private routernavigate:Router){}


  produtosForm = new FormGroup({
   
    id: new FormControl(0),
    codigoBarras: new FormControl(''),
    nome: new FormControl(''),
    preco: new FormControl(0)
  })

  ngOnInit(){
    const idProduto = this.route.snapshot.paramMap.get('id');
    if(idProduto != null){
      this.conexaoApi.dadosPorIdAlteracao(parseInt(idProduto)).subscribe(produto=>{
        this.produtosForm.setValue({
          id: produto.id ,
          codigoBarras: produto.codigoBarras,
          nome: produto.nome,
          preco: produto.preco
        })
        console.log(produto);
        
      });
    }
    
    
  }

  alterar(){
    Swal.fire('Produto Atualizado com Sucesso!')
    const produtos: Produtos = this.produtosForm.value as Produtos;
    this.conexaoApi.alteraDados(produtos).subscribe(produto =>{
      this.produtosForm.reset();
      this.routernavigate.navigate(['']);
    });
  }
}
