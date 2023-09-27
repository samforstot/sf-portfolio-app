import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  value1 = 0;
  value2 = 0;


  buttons = [
    {name: 'ac', value: 'AC'},
    {name: 'negate', value: '-/+'},
    {name: 'percent', value: '%'},
    {name: 'divide', value: '/'},
    {name: 'seven', value: '7'},
    {name: 'eight', value: '8'},
    {name: 'nine', value: '9'},
    {name: 'multiply', value: 'x'},
    {name: 'four', value: '4'},
    {name: 'five', value: '5'},
    {name: 'six', value: '6'},
    {name: 'minus', value: '-'},
    {name: 'one', value: '1'},
    {name: 'two', value: '2'},
    {name: 'three', value: '3'},
    {name: 'plus', value: '+'},
    {name: 'zero', value: '0'},
    {name: 'decimal', value: '.'},
    {name: 'equal', value: '='},
  ]

  clickButton(value: string){
    const input = document.getElementById('input');
    const currentValue = input?.textContent;
    if(input){
      if(currentValue == '0' && value != '-/+' && value != '%' && value != '/' &&value != 'x' && value != '-' && value != '+' && value != '=' && value != 'AC'){
        input.textContent = value;
      } else if (value == 'AC') {
        input.textContent = '0';
      } else if (value != '-/+' && value != '%' && value != '/' &&value != 'x' && value != '-' && value != '+' && value != '='){
        input.textContent = currentValue + value;
      } else if (value == '='){
        if(this.value1 == 0){
          this.value1 = parseFloat(value);
        } 
      }
    }
  }

  performOperation(value1: number, value2: number, op: string){
    if (op == '+'){
      return value1 + value2;
    } else if( op == '-'){
      return value1 - value2;
    } else if( op == '/'){
      return value1 / value2;
    } else {
      return value1 * value2;
    }
  }


}
