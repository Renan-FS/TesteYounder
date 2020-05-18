import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CasesComponent } from './componentes/cases/cases.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { IndexComponent } from './paginas/index/index.component';
import { IMaskModule } from 'angular-imask';
import { ContadoresComponent } from './componentes/contadores/contadores.component';
import { DiferenciaisComponent } from './componentes/diferenciais/diferenciais.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CasesComponent,
    CadastroComponent,
    IndexComponent,
    ContadoresComponent,
    DiferenciaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
