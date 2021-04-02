import { Component, OnInit } from '@angular/core';

import { Offer } from 'src/app//models/offer.model';
import { OfferService } from 'src/app//services/offer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

   offers: Offer[] = [];
    alloffers: Offer[] = [];
   myoffers: Offer[] = [];
  selectedValue : string;
  constructor(private offerService: OfferService,private router : Router) { }
   
  ngOnInit(): void {
  if(localStorage.getItem('id')){
      this.getOffers();
      this.getAllOffers();
   }
   else{
      this.router.navigate(['/login']);
   }
   
  }
	tableColumns  :  string[] = ['name', 'code', 'validity','expiryDate'];
 
  buyOffer():void{
    const data = {
      type: 'ajout',
      idoffre : this.selectedValue,
      id : sessionStorage.getItem('id')
                  
    };
    this.offerService.create(data)
    .subscribe(
      response => {
          this.getOffers();
      },
      error => {
          console.log(error);
      });
  }

  getOffers(): void {
    this.offerService.getOffers()
    .subscribe(
      response => {
      console.log(response.data);
       this.offers = response.data; 
      },
      error => {
       console.log("error-----"+error);
      });
  }

   getAllOffers(): void {
    this.offerService.getAllOffers()
    .subscribe(
      response => {
        console.log(response.data);
        this.alloffers = response.data; 
      },
      error => {
       console.log("error-----"+error);
      });
  }
}
