import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';



@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  
  constructor(public rs:RestaurantService){

  }
  rest:any[]=[];

  ngOnInit(): void {
    this.rs.getData().subscribe((data:any)=>{
      this.rest=data;
    })
  }

  sortByDeliveryTime() {
    this.rs.getDataByDeliveryTime().subscribe((data:any)=>{
      this.rest=data;
    })
  }

  sortByCuisines(){
    this.rs.getDataByCuisines().subscribe((data:any)=>{
      this.rest=data;
    })
  }
  sortByReviews(){
    this.rs.getDataByReviews().subscribe((data:any)=>{
      this.rest=data;
    })
  }
  sortByRating(){
    this.rs.getDataByRating().subscribe((data:any)=>{
      this.rest=data;
    })
  }

  filterByVegOnly(event:Event){
    if((event.target as HTMLInputElement).checked){
       this.rs.filterByVegOnly().subscribe((data:any)=>{
      this.rest=data;
    })
    }
    else{
      this.rs.getData().subscribe((data:any)=>{
      this.rest=data;
    })
    }
  }
}
