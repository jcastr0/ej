import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString) {
  if (!dateString) return '';

  // Fix: Handle YYYY-MM-DD strings explicitly to treat them as local dates.
  // Standard new Date("YYYY-MM-DD") parses as UTC, which can shift to the previous day
  // in Western timezones (e.g., "2026-01-06" -> Jan 5th 19:00 EST).
  if (typeof dateString === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const [year, month, day] = dateString.split('-').map(Number);
    // Construct date using local time arguments: year, monthIndex (0-11), day
    const date = new Date(year, month - 1, day);
    
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }

  const date = new Date(dateString);
  // Check if date is valid
  if (isNaN(date.getTime())) return dateString; // Fallback to original string if invalid
  
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
}