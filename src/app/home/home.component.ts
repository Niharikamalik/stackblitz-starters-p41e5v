import { CommonModule } from '@angular/common';
import { Component ,inject} from '@angular/core';
import { HouseLocationComponent } from '../house-location/house-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../services/housing.service';


@Component({
  selector: 'app-home',
  imports :[CommonModule,HouseLocationComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  housingLocationList: HousingLocation[]= [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList : HousingLocation[] =[];


  //  filter
  filterResult(text: string){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList
  }

}