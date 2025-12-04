export interface GoldRequest {
  id: string;
  userName: string;
  email: string;
  phone: string;
  goldQuantity: number;
  goldType: "gold_bars" | "gold_coins";
  unitPrice: number;
  totalPrice: number;
  description?: string;
  createdAt: Date;
  status: "pending" | "approved" | "rejected" | "completed";
}

export interface InstantSellRequest {
  items: [];
  name: string;
  email: string;
  phone: string;
  dropOff: string;
  status: "new" | "reviewed" | "contacted";
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "reviewed" | "contacted";
  createdAt: string;
  updatedAt: string;
}
