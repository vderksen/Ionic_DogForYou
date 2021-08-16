import { Injectable } from '@angular/core';
import { Favorite } from './all-breeds/favorites.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  // add new record to the storage
  public addNewFavorite(key: string, value: any) {
    var newFav= new Favorite(key, value);
    // eslint-disable-next-line no-underscore-dangle
    this._storage?.set(key, newFav);

  }

  // get all records from the storage
  public getAll(){
    var favBreeds: Favorite[] =[];
    // eslint-disable-next-line no-underscore-dangle
    if (this._storage != null){
    // eslint-disable-next-line no-underscore-dangle
    this._storage.forEach((value, key, index) => {
      favBreeds.push(value as Favorite);
    });
  }
    return favBreeds;
  }

  // remove a record from the storage
  public async removeFavorite(fav: Favorite){
    // eslint-disable-next-line no-underscore-dangle
    await this._storage.remove(fav.name);
  }
}
