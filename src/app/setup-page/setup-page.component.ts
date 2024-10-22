import { Component } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrl: './setup-page.component.scss'
})
export class SetupPageComponent {
  players: string[] = [
    "New Player"
  ]

  onAddPlayerClick() {
    console.log("Player Added!");
    this.players.push("Playername");
  }

  onStartButtonClick() {
    console.log("start button clicked");
  }
}