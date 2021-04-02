import { Injectable } from '@angular/core';
import { Offer } from '../models/offer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

	create(data: any): Observable<any> {
	  var formData: any = new FormData();
	  formData.append("idOffre", data.idoffre);
	  formData.append("id", localStorage.getItem('id'));
	  formData.append("type", "ajout");
	  return this.http.post('https://mobilemoney2021.herokuapp.com/offre', formData);
	}

	getOffers(): Observable<any>{
		var formData: any = new FormData();
	  	formData.append("id", localStorage.getItem('id'));
	  	formData.append("type", "liste");
	  return this.http.post('https://mobilemoney2021.herokuapp.com/offre', formData);
	}

	getAllOffers(): Observable<any>{
		var formData: any = new FormData();
	  	formData.append("type", "listall");
	  return this.http.post('https://mobilemoney2021.herokuapp.com/offre', formData);
	}
}
