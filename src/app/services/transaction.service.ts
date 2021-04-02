import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

	createCashIn(data: any): Observable<any> {
	  var formData: any = new FormData();
	  formData.append("id", localStorage.getItem('id'));
	  formData.append("montant", data.montant);
	  formData.append("etat", "ajout");
	  formData.append("code", data.code);
	  return this.http.post('https://mobilemoney2021.herokuapp.com/depot', formData);
	}

	createCashOut(data: any): Observable<any> {
	  var formData: any = new FormData();
	  formData.append("id", localStorage.getItem('id'));
	  formData.append("montant", data.montant);
	  formData.append("etat", "ajout");
	  formData.append("code", data.code);
	  return this.http.post('https://mobilemoney2021.herokuapp.com/retrait', formData);
	}


	getTransactionsCashOut(): Observable<any>{
		var formData: any = new FormData();
	  	formData.append("id", localStorage.getItem('id'));
	  	formData.append("etat", "liste");
	  	return this.http.post('https://mobilemoney2021.herokuapp.com/retrait', formData);
	}

	getTransactionsCashIn(): Observable<any>{
		var formData: any = new FormData();
	  	formData.append("id", localStorage.getItem('id'));
	  	formData.append("etat", "liste");
	  	return this.http.post('https://mobilemoney2021.herokuapp.com/depot', formData);
	}

}
