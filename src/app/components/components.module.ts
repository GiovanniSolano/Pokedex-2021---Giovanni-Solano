import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { ChipsComponent } from './chips/chips.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';



@NgModule({
  declarations: [CardPokemonComponent, ChipsComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ], exports: [
    CardPokemonComponent,
    ChipsComponent,
    ProgressBarComponent

  ]
})
export class ComponentsModule { }
