import { v4 as uuidv4 } from "uuid";

async function generateCloudinarySignature(
  timestamp: number,
  apiSecret: string
): Promise<string> {
  const stringToSign = `folder=products&timestamp=${timestamp}${apiSecret}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(stringToSign);

  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

export async function uploadToCloudinary(base64: string) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.log("⚠️ Cloudinary env variables not set. Returning local path.");
    return `/uploads/${uuidv4()}.jpg`;
  }

  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = await generateCloudinarySignature(timestamp, apiSecret!);

    const formData = new FormData();
    formData.append("file", base64);
    formData.append("timestamp", timestamp.toString());
    formData.append("api_key", apiKey);
    formData.append("signature", signature);
    formData.append("folder", "products");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      console.log("✗ Cloudinary upload failed:", await response.text());
      return `/uploads/${uuidv4()}.jpg`;
    }

    const data = await response.json();
    return data.secure_url as string;
  } catch (error) {
    console.log("✗ Cloudinary upload error:", error);
    return `/uploads/${uuidv4()}.jpg`;
  }
}
