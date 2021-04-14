import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [CatalogoComponent, DetallePokemonComponent, PerfilComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    CatalogoComponent,
    DetallePokemonComponent,
    PerfilComponent
  ]
})
export class PagesModule { }
