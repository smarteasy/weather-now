import { ScrollArea } from "@/components/ui/scroll-area"
import WeatherCard from './WeatherCard'

export default function HourlyForecast() {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 font-['Roboto',_sans-serif]">Hourly Forecast</h3>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {[...Array(24)].map((_, i) => (
            <WeatherCard key={i} hour={i} />
          ))}
        </div>
      </ScrollArea>
    </>
  )
}