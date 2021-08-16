import { Component, OnInit } from '@angular/core';
import { Breed } from './breed.model';
import { BreedsService } from './breeds.service';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-all-breeds',
  templateUrl: './all-breeds.page.html',
  styleUrls: ['./all-breeds.page.scss'],
})

export class AllBreedsPage implements OnInit {

  isSelected = false;
  breeds: Breed[];
  filterTerm: string;
  searchText: string;
  breedsOriginal: Breed[] = [];
  selected: Breed;

  constructor(private breedServ: BreedsService, public loadingController: LoadingController,
    private storageService: StorageService, public toastController: ToastController) { }

  async getList(){
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 3000
    });
    await loading.present();

    this.breedServ.getAllBreeds().subscribe(
      (breeds)=>{
        this.breeds = breeds;
        this.breedsOriginal = breeds;
      });
  }

  ngOnInit() {
    this.getList();
  }

  onInput(event: any){
    return this.breeds.filter((item) => {
      if (item.name === this.filterTerm) {
        return true;
      }
      if (item.breed_group === this.filterTerm) {
        return true;
      }
      return false;
    });
   }

  filterBreeds(){
    this.breeds = [];
    this.breeds = this.breedServ.filterBreeds(this.breedsOriginal, this.searchText);
  }

  async saveBreed(fav: Breed){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 3000,
      message: 'Saved successfully',
    });
    await toast.present();

    this.selected = fav;
    this.storageService.addNewFavorite(this.selected.name, this.selected.image.url);
    this.selected.saved = true;
  }


}
