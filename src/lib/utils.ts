import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidJSON(input: string) {
  try {
    JSON.parse(input);
    return { valid: true, error: null };
  } catch (err: any) {
    return { valid: false, error: err.message };
  }
}