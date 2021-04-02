import { Injectable } from '@angular/core';
import { Compte } from '../models/compte.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  getSolde(): Observable<any>{
		var formData: any = new FormData();
	  	formData.append("idutilisateur", localStorage.getItem('id'));
	  	return this.http.post('https://mobilemoney2021.herokuapp.com/compte', formData);
	}
}
