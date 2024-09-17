import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';

const routes: Routes = [
  { path: 'setup', component: SetupPageComponent },
  { path: 'dice', component: DiceRollComponent },
  { path: '**', component: SetupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
