import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ConteudoPostComponent } from './conteudo-post/conteudo-post.component';
import { ResumoComponent } from './resumo/resumo.component';
import { DiscurssoesComponent } from './discurssoes/discurssoes.component';
import { FooterComponent } from './footer/footer.component';
import { DuvidasComponent } from './duvidas/duvidas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    NavbarComponent,
    ConteudoPostComponent,
    ResumoComponent,
    DiscurssoesComponent,
    FooterComponent,
    DuvidasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



