import { Component,inject,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../services/housing.service';
 import {FormControl , FormGroup , ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone:true,
  imports:[CommonModule , ReactiveFormsModule]
})
export class DetailsComponent implements OnInit {
  route :ActivatedRoute =inject(ActivatedRoute);
  housingLocationId = -1;
  housingService :HousingService = inject(HousingService)
  housingLocation:HousingLocation | undefined
  applyForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl('')
  })
  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName?? '',
      this.applyForm.value.lastName?? '',
      this.applyForm.value.email?? '',
    );
  }
  constructor() { 
    const housingLocationId = 
    Number(this.route.snapshot.params['id']);
    console.log(this.housingLocationId)
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  ngOnInit() {
  }

}