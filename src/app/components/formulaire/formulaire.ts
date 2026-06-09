import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivityType } from '../../models/activity.model';
import { ActivityStore } from '../../services/activity.store';

@Component({
  selector: 'app-formulaire',
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(ActivityStore);

  protected readonly activityForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    type: ['SPORT' as ActivityType, Validators.required],
    value: [0, [Validators.required, Validators.min(1)]],
  });

  protected submit(): void {
    if (this.activityForm.invalid) {
      this.activityForm.markAllAsTouched();
      return;
    }

    this.store.addActivity(this.activityForm.getRawValue());
    this.activityForm.reset({ name: '', type: 'SPORT', value: 0 });
  }

  protected getValueLabel(type: ActivityType): string {
    return type === 'SPORT' ? 'Calories brûlées' : 'Volume (ml)';
  }
}
