import Control from "../../common/control";
import './weather.css'
export class Weather extends Control {
    private weather: Control<HTMLElement>;
    private input: Control<HTMLInputElement>;
    private icon: Control<HTMLElement>;
    private error: Control<HTMLElement>;
    private description: Control<HTMLElement>;
    private temperature: Control<HTMLElement>;
    private weatherDescription: Control<HTMLElement>;
    private wind: Control<HTMLElement>;
    private humidity: Control<HTMLElement>;
    private defaultCity: string;

    constructor(parentNode: HTMLElement) {
        super(parentNode);
        this.defaultCity = 'St. Petersburg'
        this.weather = new Control(this.node, 'div', 'weather')
        this.input = new Control(this.weather.node, 'input', 'city',)
        this.input.node.setAttribute('value', this.defaultCity)
        this.error = new Control(this.weather.node, 'div', 'weather-error')
        this.icon = new Control(this.weather.node, 'i', 'weather-icon owf')
        this.description = new Control(this.weather.node, 'div', 'description-container')
        this.temperature = new Control(this.weather.node, 'span', 'temperature')
        this.weatherDescription = new Control(this.weather.node, 'span', 'weather-description')
        this.wind = new Control(this.weather.node, 'div', 'wind')
        this.humidity = new Control(this.weather.node, 'div', 'humidity')
        this.input.node.addEventListener('input', (e) => {
            this.weatherData((e.target as HTMLInputElement).value)
        })
        this.weatherData()
    }

    weatherData(city?: string) {
        this.getWeather(city).then(data => {
            this.temperature.node.textContent = `Temp ${data.main.temp.toFixed(1)}°C`
            this.weatherDescription.node.textContent = data.weather[0].description
            this.wind.node.textContent = `Wind ${data.wind.speed}`
            this.humidity.node.textContent = `Humidity ${data.main.humidity}`
        })
    }

    async getWeather(city?: string) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city ?? 'St. Petersburg'}&lang=ru&appid=a1d7b55bf627b6db7643916254c70535&units=metric`;
        const response = await fetch(url)
        return await response.json()
    }
}
