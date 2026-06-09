import { Component, inject } from '@angular/core';
import { ActivityStore } from '../../services/activity.store';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  protected readonly store = inject(ActivityStore);
}
