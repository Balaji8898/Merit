import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url="http://localhost:8898/restaurant";
    return this.http.get(url);
  }

  getDataByDeliveryTime () {
    let url="http://localhost:8898/restaurant/deliveryTime";
    return this.http.get(url);
  }

  getDataByCuisines() {
    let url="http://localhost:8898/restaurant/Cuisines";
    return this.http.get(url);
  }

  getDataByReviews() {
    let url="http://localhost:8898/restaurant/Reviews";
    return this.http.get(url);
  }

  getDataByRating() {
    let url="http://localhost:8898/restaurant/Rating";
    return this.http.get(url);
  }

  filterByVegOnly(){
    let url="http://localhost:8898/restaurant/VegOnly";
    return this.http.get(url);
  }

}
