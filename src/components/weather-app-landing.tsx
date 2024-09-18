'use client'

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sun, Cloud, CloudRain, Wind } from "lucide-react"

export function WeatherAppLandingComponent() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex flex-col">
      <header className="bg-[#FFCC00] py-4">
        <h1 className="text-center text-3xl font-bold font-['Roboto',_sans-serif]">WeatherNow</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="bg-white p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">72°F</h2>
              <p className="text-xl mb-2">Sunny</p>
              <p className="text-gray-600">New York City</p>
            </div>
            <div className="flex items-center">
              <Sun size={64} className="text-[#FFCC00] mr-4" />
              <div>
                <p className="mb-1"><CloudRain size={18} className="inline mr-2" /> Humidity: 60%</p>
                <p><Wind size={18} className="inline mr-2" /> Wind: 5 mph</p>
              </div>
            </div>
          </div>
        </Card>

        <h3 className="text-2xl font-bold mb-4 font-['Roboto',_sans-serif]">Hourly Forecast</h3>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {[...Array(24)].map((_, i) => (
              <Card key={i} className="w-[150px] shrink-0">
                <div className="p-4">
                  <p className="font-semibold mb-2">{`${(i + 1) % 12 || 12}:00 ${i < 11 ? 'AM' : 'PM'}`}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">{`${70 + Math.floor(Math.random() * 10)}°F`}</p>
                    {i % 2 === 0 ? <Sun size={32} className="text-[#FFCC00]" /> : <Cloud size={32} className="text-gray-400" />}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>

      <footer className="bg-[#FFCC00] py-4 mt-8">
        <p className="text-center text-sm">&copy; 2023 WeatherNow. All rights reserved.</p>
      </footer>
    </div>
  )
}