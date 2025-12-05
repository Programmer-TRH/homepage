"use server";

import { getNewsPosts } from "@/services/news-posts";

export async function getNewsPostsAction() {
  const posts = await getNewsPosts();
  return posts;
}

// export async function addProductAction(formData: Product) {
//   try {
//     const parsed = singleProductSchema.safeParse(formData);
//     console.log("Parsed Data:", parsed);

//     if (!parsed.success) {
//       const errors: Record<string, string> = {};

//       parsed.error.issues.forEach((err) => {
//         if (err.path[0]) {
//           errors[err.path[0] as string] = err.message;
//         }
//       });

//       return { success: false, errors };
//     }
//     const data = parsed.data;

//     const uploadedImages = await Promise.all(
//       (data.images || []).map(async (img) => {
//         if (img.startsWith("data:image")) {
//           return await uploadToCloudinary(img);
//         }
//         return img;
//       })
//     );

//     console.log("Image URL:", uploadedImages);

//     const product = {
//       ...data,
//       id: uuidv4(),
//       createdAt: new Date(),
//       images: uploadedImages,
//     };

//     console.log("Final product to insert:", product);

//     await addProduct(product);
//     revalidateTag("products");

//     return {
//       success: true,
//       message: "Product created successfully.",
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: "Product creation failed.",
//       error: error instanceof Error ? error.message : String(error),
//     };
//   }
// }
