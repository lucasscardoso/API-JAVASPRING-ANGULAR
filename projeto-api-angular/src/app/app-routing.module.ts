import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produto/produto.component';
import { CadastrarComponent } from './pages/cadastrar-produto/cadastrar-produto.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';

const routes: Routes = [
  {path: '', component:HomeComponent
},
  {path: 'produtos', component:ProdutosComponent
},
{path: 'produtos/cadastrar', component:CadastrarComponent
},
{path: 'produtos/editar/:id', component:EditarProdutoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
