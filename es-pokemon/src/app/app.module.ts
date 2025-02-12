import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemontypesComponent } from './pokemontypes/pokemontypes.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { GenereComponent } from './genere/genere.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemontypesComponent,
    PokemonComponent,
    GenereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
