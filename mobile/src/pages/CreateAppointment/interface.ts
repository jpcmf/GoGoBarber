export interface RouteParams {
  providerId: string;
}

export interface AvailabilityItem {
  hour: number;
  available: boolean;
}

export interface HourPros {
  available?: boolean;
  selected?: boolean;
}
