import { Component, inject } from '@angular/core';
import { ActivityStore } from '../../services/activity.store';

@Component({
  selector: 'app-indicateurs',
  templateUrl: './indicateurs.html',
  styleUrl: './indicateurs.css',
})
export class Indicateurs {
  protected readonly store = inject(ActivityStore);
}
