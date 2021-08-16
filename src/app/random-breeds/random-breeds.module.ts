import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomBreedsPageRoutingModule } from './random-breeds-routing.module';

import { RandomBreedsPage } from './random-breeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomBreedsPageRoutingModule
  ],
  declarations: [RandomBreedsPage]
})
export class RandomBreedsPageModule {}
