import type { HexString } from "./agent.js";

export type ChainEventType =
  | "AgentRegistered"
  | "AgentUpdated"
  | "WalletBound"
  | "FeedbackSubmitted";

export interface BaseChainEvent {
  event_type: ChainEventType;
  block_number: bigint;
  tx_hash: HexString;
  log_index: number;
  timestamp: string;
}

export interface AgentRegisteredEvent extends BaseChainEvent {
  event_type: "AgentRegistered";
  agent_id: HexString;
  owner: HexString;
  agent_uri: string;
}

export interface AgentUpdatedEvent extends BaseChainEvent {
  event_type: "AgentUpdated";
  agent_id: HexString;
  new_uri: string;
}

export interface FeedbackSubmittedEvent extends BaseChainEvent {
  event_type: "FeedbackSubmitted";
  agent_id: HexString;
  from: HexString;
  tag: HexString;
  value: bigint;
}

export type ChainEvent =
  | AgentRegisteredEvent
  | AgentUpdatedEvent
  | FeedbackSubmittedEvent;