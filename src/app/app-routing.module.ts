import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'poke', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BlogComponent]