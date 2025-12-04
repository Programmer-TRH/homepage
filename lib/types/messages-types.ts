export interface UserMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  status: "new" | "read";
}

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

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read";
  createdAt: string;
  updatedAt: string;
}
