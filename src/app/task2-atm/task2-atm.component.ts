import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup} from '@angular/forms'


interface Log {
  message: string;
  timestamp: Date;
  type: string;
}



@Component({
  selector: 'app-task2-atm',
  templateUrl: './task2-atm.component.html',
  styleUrls: ['./task2-atm.component.css']
})
export class Task2AtmComponent implements OnInit {
  reactiveForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.initForm()

  }
  public banknotesCount: number[] = [0, 0, 0, 0];
  public banknoteValues: number[] = [2000, 500, 200, 100];
  withdrawAmount: number = 0;
  logs: Log[] = [];

  deposit(banknotesCt: string[]): void {
    for (let i = 0; i < 4; i++) {
      this.banknotesCount[i] += parseInt(banknotesCt[i]);
    }
    const logMessage = `Deposit  2000:${banknotesCt[0]} 500:${banknotesCt[1]} 200:${banknotesCt[2]} 100:${banknotesCt[3]}`;
    this.logs.unshift({ message: logMessage, timestamp: new Date(), type: 'deposit' });
    
  }

  withdrawRecursive(amount: number, startIndex: number): boolean {
    if (amount === 0) {
      return true;
    }

    for (let i = startIndex; i < this.banknoteValues.length; i++) {
      const banknotesToUse = Math.min(
        Math.floor(amount / this.banknoteValues[i]),
        this.banknotesCount[i]
      );

      for (let count = banknotesToUse; count >= 0; count--) {
        if (count > 0) {
          this.banknotesCount[i] -= count;
        }

        if (this.withdrawRecursive(amount - count * this.banknoteValues[i], i + 1)) {
          return true;
        }

        if (count > 0) {
          this.banknotesCount[i] += count;
        }
      }
    }

    return false;
  }

  withdraw(amount: number): number[] {
    if (this.withdrawRecursive(amount, 0)) {
      return [...this.banknotesCount];
    } else {
      return [-1];
    }
  }

  onSubmit(){
    const banknotes = this.reactiveForm.get('banknotesCt').value;
    this.deposit(banknotes);
    this.initForm();
  }
  getTotalBanknotes(): number {
    return this.banknotesCount.reduce((total, count, index) => total + count * this.banknoteValues[index], 0);
  }

  initForm(){
    this.reactiveForm = new FormGroup({
      banknotesCt: new FormArray([
        new FormControl(0),
        new FormControl(0),
        new FormControl(0),
        new FormControl(0),
      ])
    });
  }

  performWithdrawal() {
    const initialBanknotesCount = [...this.banknotesCount];
    const withdrawalResult = this.withdraw(this.withdrawAmount);
  
    if (withdrawalResult[0] === -1) {
      this.logs.unshift({ message: 'Cannot Withdraw', timestamp: new Date(), type: 'withdrawFailed' });
    } else {
      const withdrawalMessage = this.getWithdrawalLogMessage(initialBanknotesCount,withdrawalResult);
      this.logs.unshift({ message: withdrawalMessage, timestamp: new Date(), type: 'withdrawSuccessful' });
    }
    this.withdrawAmount = 0;
  
    return withdrawalResult;
  }
  
  getWithdrawalLogMessage(initialBanknotesCount: number[],withdrawalResult: number[]): string {
    const breakdown = this.banknoteValues
      .map((value, index) => `${value}:${initialBanknotesCount[index]-withdrawalResult[index]}`)
      .join(' ');
  
    return `Withdraw [${this.withdrawAmount}] ${breakdown}`;
  }
  
  
  
  

  getLogClass(log: Log): string {
    if (log.type === 'deposit') {
      return 'alert alert-info';
    } else if (log.type === 'withdrawSuccessful') {
      return 'alert alert-success';
    } else if (log.type === 'withdrawFailed') {
      return 'alert alert-danger';
    }
    return '';
  }

  

}