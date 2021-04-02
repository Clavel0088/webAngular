import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:80/services/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	name?: any;

	constructor(private http: HttpClient) { }

	create(data: any): Observable<any> {
	  var formData: any = new FormData();
	  formData.append("nom", data.nom);
	  formData.append("login", data.login);
	  formData.append("mdp", data.password);
	  formData.append("idOperateur", data.operateur);
	  formData.append("etat", "save");
	  	return this.http.post('https://mobilemoney2021.herokuapp.com/utilisateur', formData);
	}

	login(data:any): Observable<any>{
		var formData: any = new FormData();
	  	formData.append("login", data.login);
	  	formData.append("mdp", data.password);
	  	formData.append("etat", "login");
	  	return this.http.post('https://mobilemoney2021.herokuapp.com/utilisateur', formData);
	}

	liste(): Observable<any>{
		var formData: any = new FormData();
		formData.append("etat", "liste");
	  	return this.http.post('https://mobilemoney2021.herokuapp.com/utilisateur', formData);
	}

}
