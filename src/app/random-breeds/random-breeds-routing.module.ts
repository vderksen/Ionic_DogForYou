import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomBreedsPage } from './random-breeds.page';

const routes: Routes = [
  {
    path: '',
    component: RandomBreedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomBreedsPageRoutingModule {}
