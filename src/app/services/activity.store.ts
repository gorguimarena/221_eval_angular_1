import { computed, Injectable, signal } from '@angular/core';
import {
  Activity,
  DAILY_CALORIE_GOAL,
  HealthStatus,
  MIN_CALORIES_FOR_HEALTH_GOAL,
  MIN_WATER_ML,
  NewActivity,
  STORAGE_KEY,
} from '../models/activity.model';

@Injectable({ providedIn: 'root' })
export class ActivityStore {
  readonly activities = signal<Activity[]>(this.loadActivities());

  readonly totalCalories = computed(() =>
    this.activities()
      .filter((activity) => activity.type === 'SPORT')
      .reduce((sum, activity) => sum + activity.value, 0),
  );

  readonly totalWater = computed(() =>
    this.activities()
      .filter((activity) => activity.type === 'HYDRATATION')
      .reduce((sum, activity) => sum + activity.value, 0),
  );

  readonly remainingCalories = computed(
    () => DAILY_CALORIE_GOAL - this.totalCalories(),
  );

  readonly showDehydrationWarning = computed(
    () => this.totalWater() < MIN_WATER_ML,
  );

  readonly showHealthSuccess = computed(
    () =>
      this.totalWater() >= MIN_WATER_ML &&
      this.totalCalories() > MIN_CALORIES_FOR_HEALTH_GOAL,
  );

  readonly healthStatus = computed((): HealthStatus => {
    if (this.showDehydrationWarning()) {
      return 'dehydration';
    }

    if (this.showHealthSuccess()) {
      return 'success';
    }

    return 'neutral';
  });

  readonly sortedActivities = computed(() =>
    [...this.activities()].sort((a, b) => b.createdAt - a.createdAt),
  );

  readonly dailyCalorieGoal = DAILY_CALORIE_GOAL;

  addActivity(activity: NewActivity): void {
    const newActivity: Activity = {
      id: crypto.randomUUID(),
      name: activity.name,
      type: activity.type,
      value: activity.value,
      createdAt: Date.now(),
    };

    this.activities.update((current) => [...current, newActivity]);
    this.persistActivities();
  }

  private loadActivities(): Activity[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as Activity[]) : [];
    } catch {
      return [];
    }
  }

  private persistActivities(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.activities()));
  }
}
