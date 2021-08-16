import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';
import { Favorite } from '../all-breeds/favorites.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: Favorite[];

  constructor(private storgeService: StorageService, private alertController: AlertController,
    public loadingController: LoadingController) { }

  async getList(){
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 1000
    });
      await loading.present();

    this.favorites = this.storgeService.getAll();
  }

  ngOnInit() {
    this.getList();
  }

  deleteBreed(breedToDelete: Favorite){

    this.alertController.create({
      header: 'Danger!',
      message : 'Are sure you want to delete?? ',
      buttons: [{
        text :'Delete',
        handler : ()=>{
          this.storgeService.removeFavorite(breedToDelete);
          this.favorites = this.storgeService.getAll();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    });

  }

}
