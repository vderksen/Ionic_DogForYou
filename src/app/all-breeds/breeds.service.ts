import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Breed } from './breed.model';
import { RandomBreed } from './random.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BreedsService {
  url = 'https://api.thedogapi.com/v1';
  breedDetails: Breed;
  randomBreed: RandomBreed;
  filteredBreeds: Breed[] = [];

  constructor(private http: HttpClient) { }

  getAllBreeds(){
    return this.http.get<Breed[]>(this.url + '/breeds');
  }

  getRandomBreed(){
    return this.http.get<RandomBreed[]>(this.url + '/images/search?limit=1?has_breeds=true');
  }


  filterBreeds(breeds: Breed[], key: string){
    this.filteredBreeds = [];
    breeds.forEach((item) => {
      if(item.name.toLowerCase().startsWith(key.toLowerCase())){
        this.filteredBreeds.push(item);
      }
    });
    return  this.filteredBreeds;
  }


}



