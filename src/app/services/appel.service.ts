import { Injectable } from '@angular/core';
import { Appel } from '../models/appel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'https://mobilemoney2021.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class AppelService {

	constructor(private http: HttpClient) { }

	create(data: any): Observable<any> {
	  var formData: any = new FormData();
	  formData.append("duree", data.duree);
	  formData.append("appelant", localStorage.getItem('id'));
	  formData.append("appeler", data.appeler.id);
	  formData.append("etat", "ajout");
	  return this.http.post('https://mobilemoney2021.herokuapp.com/appel', formData);
	}

	liste(id:any): Observable<any>{
		var formData: any = new FormData();
	  	 formData.append("etat", "liste");
	  	formData.append("idU", localStorage.getItem('id'));
	  	return this.http.post('https://mobilemoney2021.herokuapp.com/appel', formData);
	}
}
