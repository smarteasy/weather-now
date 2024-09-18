import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CurrentWeather from '@/components/CurrentWeather'
import HourlyForecast from '@/components/HourlyForecast'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <CurrentWeather />
        <HourlyForecast />
      </main>
      <Footer />
    </div>
  )
}
