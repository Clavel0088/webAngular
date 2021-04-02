import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashout',
  templateUrl: './cashout.component.html',
  styleUrls: ['./cashout.component.css']
})
export class CashoutComponent implements OnInit {

 transactions: Transaction[] = [];
  
 transaction: Transaction = {
     montant: '',
     idCompte: '',
    };
  message ="";

  ngOnInit(): void {
    if(localStorage.getItem('id')){
        this.getTransactionsCashOut();
   }
   else{
      this.router.navigate(['/login']);
   }
  }

  constructor(private transactionService: TransactionService,private router:Router) { }

  tableColumns  :  string[] = ['date', 'montant', 'fee'];

  codeSecret = "";
  validateCashOut() : void{
     
    const data = {
      montant: this.transaction.montant,
      id : 1,
      code : this.codeSecret
    };

    this.transactionService.createCashOut(data)
    .subscribe(
      response => {
        console.log(response);
         this.message = response.message;
         this.getTransactionsCashOut();
      },
      error => {
       console.log(error);
       this.message = "Une erreur est survenue !";

      });
  }

  getTransactionsCashOut(): void {
     this.transactionService.getTransactionsCashOut()
    .subscribe(
      response => {
       this.transactions = response.data; 
      },
      error => {
       console.log("error-----"+error);
      });
  }

}
