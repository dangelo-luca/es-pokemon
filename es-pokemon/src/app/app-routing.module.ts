import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemontypesComponent } from './pokemontypes/pokemontypes.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path:"pokemontypes", component: PokemontypesComponent},
  {path:"pokemon/:id", component: PokemonComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
