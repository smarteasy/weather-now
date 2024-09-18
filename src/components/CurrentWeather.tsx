import { Card } from "@/components/ui/card"
import { Sun, CloudRain, Wind } from "lucide-react"

export default function CurrentWeather() {
  return (
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
  )
}