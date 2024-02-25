export interface Cycle {
  fridge_id: number;
  cooldown_number: number;
  cooldown_start: string;
  cooldown_end: string;
  warmup_start: string;
  warmup_end: string;
}

export interface CycleApi {
  fridge_id: string;
  cooldown_number: string;
  cooldown_start: string;
  cooldown_end: string;
  warmup_start: string;
  warmup_end: string;
}
