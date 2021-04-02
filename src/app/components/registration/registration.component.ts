import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Operateur } from 'src/app/models/operateur.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	user: User = {
	   nom: '',
	   login: '',
	   mdp:'',
     operateur:    
     {
        id: 0,
        nom: '',
        prixMemeOp : 0,
        prixAutre : 0
      }
	  };
  message ="";


submitted = false;
  ngOnInit(): void {
  }

  constructor(private userService: UserService,private router : Router) { }

 register(): void {
    const data = {
      nom: this.user.nom,
      login: this.user.login,
      password: this.user.mdp,
      operateur: 1
    };

   
    this.userService.create(data)
	  .subscribe(
	    response => {
	      console.log(response);
	      this.submitted = true;
        
        if(response.error)
        {
            this.message = "Une erreur est survenue!"
        }
        else
        {
          this.message = "Inscription reussie!"
          this.router.navigate(['/login']);
        }
	    },
	    error => {
	     console.log(error);
       this.message = "Une erreur est survenue !";

	    });

  }

 



}
