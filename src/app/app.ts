import { Component, signal } from '@angular/core';
import { Alert } from './components/alert/alert';
import { Formulaire } from './components/formulaire/formulaire';
import { Indicateurs } from './components/indicateurs/indicateurs';
import { List } from './components/list/list';

@Component({
  selector: 'app-root',
  imports: [Indicateurs, Alert, Formulaire, List],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Fit Track Pro');
}
