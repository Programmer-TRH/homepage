export interface News {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  status: "new" | "read" | "replied";
}

export interface GoldRequest {
  id: string;
  userName: string;
  email: string;
  phone: string;
  goldQuantity: number;
  goldType: "gold_bars" | "gold_coins" | "gold_jewelry";
  unitPrice: number;
  totalPrice: number;
  description?: string;
  createdAt: Date;
  status: "pending" | "approved" | "rejected" | "completed";
}
