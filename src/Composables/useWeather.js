import { getTemperatura } from "@/Helpers/Weather";
import { useWeatherStore } from "@/stores/WeatherStore";

export const useWeather = async()=>{
    const temperatura = await getTemperatura()
    const WeatherStore = useWeatherStore()
    WeatherStore.temperatura=temperatura
}