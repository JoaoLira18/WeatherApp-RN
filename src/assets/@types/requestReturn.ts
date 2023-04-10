
export type CurrentType = {
    base: string,
    clouds: {
        all: number
    },
    cod: number,
    coord: {
        lat: number,
        lon: number
    },
    dt: number,
    id: number,
    main: {
        feels_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_max: number,
        temp_min: number
    },
    name: string,
    sys: {
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    visibility: number,
    weather: Weather[],
    wind: {
        deg: number,
        gust: number,
        speed: number
    }
}

export type ForecastType = {
    city: {
        coord: {
            lat: number,
            lon: number
        },
        country: string,
        id: number,
        name: string,
        population: number,
        sunrise: number,
        sunset: number,
        timezone: number
    },
    cnt: number,
    cod: string,
    list: list[]
}

export type list = {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: Weather[],
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    visibility: number,
    pop: number,
    rain: {
        "3h": number
    },
    sys: {
        pod: string
    },
    dt_txt: string
}

type Weather = {
    id: number,
    main: string,
    description: string,
    icon: string
}