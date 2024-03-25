import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import { Produtos } from 'src/app/interfaces/produtos';
import { ConexaoApiService } from 'src/app/services/produtoService.service';
import { ProdutosComponent } from '../produto/produto.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})


export class CadastrarComponent implements OnInit {

  constructor(private conexaoApi:ConexaoApiService,private router:Router,private formBuilder:FormBuilder){}
  
  produtosForm = new FormGroup({
   
    id: new FormControl(0),
    codigoBarras: new FormControl('',[Validators.required ,Validators.minLength(5),Validators.maxLength(255)]),
    nome: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(255)]),
    preco: new FormControl(0,Validators.required)
  })

  
  
  ngOnInit(): void {
   
      
  
  }
  

  enviar(){
    Swal.fire('Produto Cadastrado com Sucesso!')
    const produto: Partial <Produtos> = this.produtosForm.value as Produtos;
      this.conexaoApi.enviaDados(produto).subscribe(data =>{console.log('deu certo')});
      this.produtosForm.reset();
      this.router.navigate(['']);

   }

   home(){
   
    this.router.navigate(['']);
  }
  
   
  }

    


