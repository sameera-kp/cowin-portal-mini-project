export interface Hospital {
  center_id: number;
  name: string;
  address: string;
  fee_type: string;
  sessions: {
    vaccine: string;
    available_capacity: number;
    min_age_limit: number;
  }[];
}