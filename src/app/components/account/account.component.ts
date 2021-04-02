import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';
import { Compte } from 'src/app/models/compte.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private compteService: CompteService,private router : Router) { }
   showmenu = true;
  ngOnInit(): void {
   if(localStorage.getItem('id')){
      this.getSolde();
   }
   else{
      this.router.navigate(['/login']);
   }
   }

  solde : string;
  
  getSolde():void{
  	 this.compteService.getSolde()
    .subscribe(
      response => {
      this.solde = response.data.solde+" Ar"; 
      },
      error => {
       console.log("error compte"+error);
      });
  }
  	

  

}
