import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivityStore } from '../../services/activity.store';

@Component({
  selector: 'app-list',
  imports: [DatePipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  protected readonly store = inject(ActivityStore);
}
