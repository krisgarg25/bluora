import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImageUrl = (imagePath: string) => {
  if (!imagePath) return '';

  // If it's already a full URL, return it
  if (imagePath.startsWith('http') || imagePath.startsWith('//')) {
    return imagePath;
  }

  // If it's a local path (starts with /) or has an extension and doesn't look like a clear ID
  // Heuristic: Local files usually have extensions. Cloudinary IDs don't (typically).
  const hasExtension = /\.[a-zA-Z0-9]{3,4}$/.test(imagePath);
  if (imagePath.startsWith('/') || hasExtension) {
    return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${imagePath.replace(/^\//, '')}`;
  }

  // Otherwise, assume it's a Cloudinary Public ID
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (cloudName) {
    return `https://res.cloudinary.com/${cloudName}/image/upload/${imagePath}`;
  }

  // Fallback if no cloud name but looks like ID (or just return relative as last resort)
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${imagePath}`;
};
