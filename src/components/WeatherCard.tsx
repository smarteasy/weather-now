import { Card } from "@/components/ui/card"
import { Sun, Cloud } from "lucide-react"
import { getHourString, getRandomTemperature } from '@/lib/utils'

interface WeatherCardProps {
  hour: number
}

export default function WeatherCard({ hour }: WeatherCardProps) {
  return (
    <Card className="w-[150px] shrink-0">
      <div className="p-4">
        <p className="font-semibold mb-2">{getHourString(hour)}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{`${getRandomTemperature()}°F`}</p>
          {hour % 2 === 0 ? <Sun size={32} className="text-[#FFCC00]" /> : <Cloud size={32} className="text-gray-400" />}
        </div>
      </div>
    </Card>
  )
}