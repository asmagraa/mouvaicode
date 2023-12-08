import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { AvisComponent } from './avis/avis.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { ListavisComponent } from './listavis/listavis.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    AvisComponent,
    ListavisComponent,
  
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,    ReactiveFormsModule,

  CommonModule,
  NgbModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
