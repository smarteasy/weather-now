import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getHourString(hour: number): string {
  return `${(hour + 1) % 12 || 12}:00 ${hour < 11 ? 'AM' : 'PM'}`

}

export function getRandomTemperature(): number {
  return 70 + Math.floor(Math.random() * 10)
}
