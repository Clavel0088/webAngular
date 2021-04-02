 import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashin',
  templateUrl: './cashin.component.html',
  styleUrls: ['./cashin.component.css']
})
export class CashinComponent implements OnInit {
  transactions: Transaction[] = [];
  transaction: Transaction = {
     
     montant: '',
     idCompte: 1,
    };
  message ="";

  constructor(private transactionService: TransactionService,private router:Router) { }

  ngOnInit(): void {
   if(localStorage.getItem('id')){
    this.getTransactionsCashIn();
   }
   else{
      this.router.navigate(['/login']);
   }

  }
  tableColumns  :  string[] = ['date', 'montant'];
  
  

  codeSecret = "";
  validateCashIn() : void{
     
    const data = {
      montant: this.transaction.montant,
      id : '1',
      code : this.codeSecret
    };

    this.transactionService.createCashIn(data)
    .subscribe(
      response => {
         this.getTransactionsCashIn();
         this.message = response.message;
      },
      error => {
       console.log(error);
       this.message = "Une erreur est survenue !";

      });
  }

  getTransactionsCashIn(): void {

    this.transactionService.getTransactionsCashIn()
    .subscribe(
      response => {
       this.transactions = response.data; 
      },
      error => {
       console.log("error-----"+error);
      });

  }
}
