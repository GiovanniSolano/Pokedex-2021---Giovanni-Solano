import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetallePokemonComponent } from './pages/detalle-pokemon/detalle-pokemon.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: '/catalogo'},
  { path: 'catalogo', component: CatalogoComponent, data: {titulo: 'Catálogo'}},
  { path: 'detalle-pokemon/:id', component: DetallePokemonComponent, data: {titulo: 'Detalle Pokemon'}},
  { path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil'}},
  { path: '**', component: CatalogoComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
