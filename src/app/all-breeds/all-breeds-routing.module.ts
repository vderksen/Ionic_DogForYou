import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBreedsPage } from './all-breeds.page';

const routes: Routes = [
  {
    path: '',
    component: AllBreedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBreedsPageRoutingModule {}
