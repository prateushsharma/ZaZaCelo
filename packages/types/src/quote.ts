import type { HexString } from "./agent.js";

export interface QuoteRequest {
  agent_id: string;
  task_type: string;
  task_data: Record<string, unknown>;
  max_price_uusdt: number;
  requester_peer_id?: string;
}

export interface Quote {
  quote_id: string;
  agent_id: string;
  task_type: string;
  price_uusdt: number;
  payment_wallet: HexString;
  valid_until: number;
  quote_hash: HexString;
  agent_sig: HexString;
  sla: { p95_latency_ms: number };
}