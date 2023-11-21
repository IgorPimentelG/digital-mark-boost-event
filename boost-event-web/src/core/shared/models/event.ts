export type Event = {
  id?: string;
  name: string;
  description: string;
  segment: string;
  local: string;
  capacity: number;
  occursAt: string;
  status?: string;
}