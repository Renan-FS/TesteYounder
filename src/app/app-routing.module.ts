import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import {IndexComponent} from './paginas/index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
