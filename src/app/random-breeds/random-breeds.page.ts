import { Component, OnInit } from '@angular/core';
import { RandomBreed } from '../all-breeds/random.model';
import { BreedsService } from '../all-breeds/breeds.service';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-random-breeds',
  templateUrl: './random-breeds.page.html',
  styleUrls: ['./random-breeds.page.scss'],
})
export class RandomBreedsPage implements OnInit {

  breed: RandomBreed[];
  public text = 'LIKE';
  selected: RandomBreed;

  constructor(private breedServ: BreedsService, public loadingController: LoadingController,
    private storageService: StorageService, public toastController: ToastController) {}

  async getList()
  {
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 1000
    });
    await loading.present();

    this.breedServ.getRandomBreed().subscribe(
      (breed)=>{
        this.breed = breed;
        if(this.breed[0].breeds.length < 1){
        }
      });

      this.text = 'LIKE';
  }

  ngOnInit(){
    this.getList();
  }

  async saveBreed(fav: RandomBreed){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 1000,
      message: 'Saved successfully',
    });
    await toast.present();

    this.selected = fav;
    this.storageService.addNewFavorite(this.selected.breeds[0].name, this.selected.url);
    this.selected.saved = true;
    this.text = 'LIKED';
  }

}





