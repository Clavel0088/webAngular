import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user: User = {
     login: '',
     mdp: ''
    };
 constructor(private userService: UserService,private router : Router) { }

  ngOnInit(): void {
    localStorage.removeItem("id");
    localStorage.clear();
  }

    message : '';
   login(): void{

  	const data = {
  	  login: this.user.login,
      password: this.user.mdp
    };


    this.userService.login(data)
    .subscribe(
      response => {
          if(response.error){
            this.message = response.message;
           }
          else
          {
            if(response.httpCode == 200)
              { 
                  localStorage.setItem('id',response.data.id);
                  this.router.navigate(['/account']);
              }
            else this.message = response.message; 
          }
      },
      error => {
       console.log(error);
      });
   
  }

}
