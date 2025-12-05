import { UploadedImage } from "@/actions/cloudinary-action";

export interface UploadDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  images: UploadedImage[];
  status: "new" | "reviewed" | "contacted";
  createdAt: string;
  updatedAt: string;
}

export interface InstantSellRequest {
  id: string;
  items: [];
  name: string;
  email: string;
  phone: string;
  dropOff: string;
  status: "new" | "reviewed" | "contacted";
  createdAt: string;
  updatedAt: string;
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
