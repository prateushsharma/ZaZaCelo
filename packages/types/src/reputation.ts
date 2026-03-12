export type ReputationDimension =
  | "success_rate"
  | "avg_latency"
  | "dispute_rate"
  | "payment_completion"
  | "uptime"
  | "freshness";

export interface ReputationScore {
  agent_id: string;
  composite: number;
  dimensions: Record<ReputationDimension, number>;
  sample_size: number;
  computed_at: string;
}

export const REPUTATION_WEIGHTS: Record<ReputationDimension, number> = {
  success_rate: 0.25,
  avg_latency: 0.15,
  dispute_rate: 0.20,
  payment_completion: 0.15,
  uptime: 0.15,
  freshness: 0.10,
};