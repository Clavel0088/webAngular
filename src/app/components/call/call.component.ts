import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Appel } from 'src/app/models/appel.model';
import { AppelService } from 'src/app/services/appel.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

interface UserI {
  name: string;
  number: string;
}

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
 

  listCalls : Appel[] = [];
  listUsers : User[] = [];
  listeUtilisateurs : User[] = [];
  selectedValueId : string;
  id : any = 1;
  constructor(private appelService : AppelService,private userService : UserService,private router:Router) { }
	myDataArray = '';
  
  appel: Appel = { 
    id: '',
    duree: 0,
    dateAppel: '',
    appeler : {
    id : '',
    numero : ''
    },
    appelant :  {
    id : 1 ,
    numero : ''
    }
    };

  ngOnInit(): void {
     if(localStorage.getItem('id')){
        this.getAllUsers();
         this.getCalls();
     }
     else{
        this.router.navigate(['/login']);
     }
  }

  selectedValue : string;
  tableColumns  :  string[] = ['date', 'numero', 'duree'];
  tableColumn  :  string[] = ['date', 'numero'];


  saveCall():void{
  this.appel.appeler.id = this.selectedValue;
    const data = {
      appelant: this.appel.appelant,
      appeler: this.appel.appeler,
      duree: this.appel.duree
    };

    this.appelService.create(data)
    .subscribe(
      response => {
          this.getCalls();
      },
      error => {
       console.log(error);
      });
  }

  getCalls():void{
      
      this.appelService.liste(this.id)
       .subscribe(
      response => {
      console.log("liste calls"+response.data);
        this.listCalls = response.data;
      },
      error => {
       console.log("error"+error);
      });
  }

  getAllUsers():void{
     
      this.userService.liste()
       .subscribe(
      response => {
         console.log("liste user"+ response.data);
         this.listUsers = response.data;
          this.listeUtilisateurs = response.data;
      },
      error => {
       console.log("error-----"+error);
      });
  }
 
}
