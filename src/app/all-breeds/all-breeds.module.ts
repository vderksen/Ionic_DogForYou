import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllBreedsPageRoutingModule } from './all-breeds-routing.module';

import { AllBreedsPage } from './all-breeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllBreedsPageRoutingModule
  ],
  declarations: [AllBreedsPage]
})
export class AllBreedsPageModule {}
