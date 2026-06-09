export type ActivityType = 'SPORT' | 'HYDRATATION';

export type HealthStatus = 'dehydration' | 'success' | 'neutral';

export interface Activity {
  id: string;
  name: string;
  type: ActivityType;
  value: number;
  createdAt: number;
}

export interface NewActivity {
  name: string;
  type: ActivityType;
  value: number;
}

export const DAILY_CALORIE_GOAL = 2000;
export const MIN_WATER_ML = 1500;
export const MIN_CALORIES_FOR_HEALTH_GOAL = 500;
export const STORAGE_KEY = 'fit-track-pro-activities';
