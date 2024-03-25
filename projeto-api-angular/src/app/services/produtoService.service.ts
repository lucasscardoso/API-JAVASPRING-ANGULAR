import { HttpClient } from '@angular/common/http';


import { CadastrarComponent } from '../pages/cadastrar-produto/cadastrar-produto.component';
import { Produtos } from '../interfaces/produtos';
import { ProdutosComponent } from '../pages/produto/produto.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConexaoApiService {
  apiUrl = 'http://localhost:8080/api/produtos'; 
 
  constructor(private httpcliente:HttpClient) { }

  public getDados() {
    return this.httpcliente.get<Produtos[]>(this.apiUrl);
  }
  public enviaDados(produto:Partial<Produtos>){
    return this.httpcliente.post(this.apiUrl, produto);
  }
  public excluir(id:number){
    return this.httpcliente.delete<Produtos>(`http://localhost:8080/api/produtos/${id}`)
  }
  public dadosPorIdAlteracao(id:number){
    return this.httpcliente.get<Produtos>(`http://localhost:8080/api/produtos/${id}`);
  }
  public alteraDados(produto:Produtos){
    return this.httpcliente.put(this.apiUrl, produto);
  }
}
