import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrl: './dice-roll.component.scss'
})
export class DiceRollComponent {
  dice1 = 0;
  dice2 = 0;
  dice1Style = "";
  dice2Style = "";


  onRollButtonClick() {
    this.dice1 = this.rollDiceNumberGenerator();
    this.dice2 = this.rollDiceNumberGenerator();
    this.dice1Style = `bi-dice-${this.dice1}`;
    this.dice2Style = `bi-dice-${this.dice2}-fill`;
  }

  rollDiceNumberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
