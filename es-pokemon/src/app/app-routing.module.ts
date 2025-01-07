import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemontypesComponent } from './pokemontypes/pokemontypes.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { GenereComponent } from './genere/genere.component';

const routes: Routes = [
  {path:"pokemontypes/:pokemon", component: PokemonComponent},
  {path:"generi/:genere", component: PokemontypesComponent},
  {path: "generi", component:GenereComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
