export type HexString = `0x${string}`;
export type ISODateString = string;
export type PeerIdString = string;

export type PricingModel = "per_page" | "per_message" | "per_second" | "flat" | "free";

export interface CapabilityPricing {
  model: PricingModel;
  /** Price in micro-USDT (1 USDT = 1_000_000) */
  amount_microusdt: number;
}

export interface CapabilitySLA {
  p95_latency_ms: number;
  availability_target_bps: number;
}

export interface AgentCapability {
  capability_id: string;
  input_schema: string;
  output_schema: string;
  pricing: CapabilityPricing;
  sla: CapabilitySLA;
  constraints: Record<string, unknown>;
}

export type AuthMethod = "x402" | "jwt" | "apikey" | "none";
export type Region = string;

export interface AgentMetadata {
  schema_version: "1.0";
  agent_id: string;
  name: string;
  version: string;
  description: string;
  capabilities: AgentCapability[];
  supported_langs: string[];
  regions: Region[];
  concurrency_limit: number;
  auth_methods: AuthMethod[];
  libp2p_peer_id: PeerIdString;
  http_endpoint: string;
  status_feed: string;
  owner_sig: HexString;
  published_at: ISODateString;
}

export interface AgentRecord {
  owner: HexString;
  paymentWallet: HexString;
  agentURI: string;
  stakedAmount: bigint;
  registeredAt: bigint;
  updatedAt: bigint;
  active: boolean;
}

export interface IndexedAgent {
  agent_id: string;
  name: string;
  description: string;
  version: string;
  owner: HexString;
  payment_wallet: HexString;
  agent_uri: string;
  staked_amount: string;
  capabilities: AgentCapability[];
  capability_ids: string[];
  supported_langs: string[];
  regions: Region[];
  concurrency_limit: number;
  auth_methods: AuthMethod[];
  libp2p_peer_id: PeerIdString;
  http_endpoint: string;
  status_feed: string;
  active: boolean;
  registered_at: ISODateString;
  updated_at: ISODateString;
  last_seen_at: ISODateString | null;
}