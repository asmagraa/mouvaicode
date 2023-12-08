import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AvisComponent } from './avis/avis.component';
import { ListavisComponent } from './listavis/listavis.component';


const routes: Routes = [
  
    { path: '', component: AccueilComponent } , 
    { path: 'avis', component: AvisComponent } ,
    { path: 'lavis', component: ListavisComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
