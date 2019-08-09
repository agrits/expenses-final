import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from './expense';

@Pipe({
  name: 'descriptionAndAmount'
})
export class DescriptionAndAmountPipe implements PipeTransform {

  transform(value: Expense, ...args: any[]): any {
    return  `${value.description}: ${value.amountSpent}`;
  }

}
