import type { HexString } from "./agent.js";

export interface DeliveryReceipt {
  message_id: string;
  task_id: string;
  sender_peer_id: string;
  recipient_peer_id: string;
  result_hash: HexString;
  result_cid: string;
  sender_sig: HexString;
  recipient_ack_sig: HexString;
  settlement_proof: HexString;
  nonce: string;
  session_id: string;
  seq: number;
  expires_at: string;
  created_at: string;
}