"use server";
import crypto from "crypto";

export interface UploadedImage {
  url: string;
  publicId: string;
}

export async function ServerUploadCloudinaryImage(
  file: File
): Promise<UploadedImage> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const folder = "sell-request";

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary environment variables missing");
  }

  if (!file || file.size === 0) {
    throw new Error("File missing or empty");
  }

  const timestamp = Math.floor(Date.now() / 1000);

  // Create signature
  const signatureRaw = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
  const signatureBuffer = await crypto.subtle.digest(
    "SHA-1",
    new TextEncoder().encode(signatureRaw)
  );
  const signature = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Prepare form data
  const formData = new FormData();
  formData.append("file", file);
  formData.append("folder", folder);
  formData.append("timestamp", timestamp.toString());
  formData.append("api_key", apiKey);
  formData.append("signature", signature);

  // Upload
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    { method: "POST", body: formData }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Cloudinary upload failed: ${errText}`);
  }

  const result = await response.json();
  console.log("Result:", result);

  if (!result.secure_url) {
    throw new Error("No secure_url returned by Cloudinary");
  }

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
}

export async function ClientUploadCloudinaryImage(
  file: File
): Promise<UploadedImage> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET!);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Upload failed: ${text}`);
  }

  const data = await response.json();

  return {
    url: data.secure_url,
    publicId: data.public_id,
  };
}

export async function deleteCloudinaryImage(publicId: string) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME!;
  const apiKey = process.env.CLOUDINARY_API_KEY!;
  const apiSecret = process.env.CLOUDINARY_API_SECRET!;

  const timestamp = Math.floor(Date.now() / 1000);

  const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = crypto
    .createHash("sha1")
    .update(stringToSign)
    .digest("hex");

  const formData = new URLSearchParams();
  formData.append("public_id", publicId);
  formData.append("timestamp", timestamp.toString());
  formData.append("api_key", apiKey);
  formData.append("signature", signature);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
    {
      method: "POST",
      body: formData,
    }
  );
  const text = await res.text();
  const data = JSON.parse(text);
  console.log("Data:", data);

  if (!res.ok || data.result !== "ok") {
    throw new Error(data.error?.message || "Failed to delete files");
  }

  return data;
}
