export interface Cycle {
  fridge_id: string;
  cooldown_number: string;
  cooldown_start: string;
  cooldown_end: string;
  warmup_start: string;
  warmup_end: string;
}

export interface CycleSummary {
  fridgeId: string;
  cycleNumber: number;
  cooldown: number;
  cold: number;
  warmup: number;
  warm: number | null;
}
