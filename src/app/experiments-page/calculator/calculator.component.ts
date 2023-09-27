import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  buttons = [
    {name: 'AC', value: ''},
    {name: 'negate', value: ''},
    {name: 'percent', value: ''},
    {name: 'divide', value: ''},
    {name: 'seven', value: '7'},
    {name: 'eight', value: '8'},
    {name: 'nine', value: '9'},
    {name: 'multiply', value: ''},
    {name: 'four', value: '4'},
    {name: 'five', value: '5'},
    {name: 'six', value: '6'},
    {name: 'minus', value: ''},
    {name: 'one', value: '1'},
    {name: 'two', value: '2'},
    {name: 'three', value: '3'},
    {name: 'plus', value: ''},
    {name: 'zero', value: '0'},
    {name: 'decimal', value: ''},
    {name: 'equal', value: ''},
  ]

  clickButton(value: string){
    console.log(value)
  }

}
