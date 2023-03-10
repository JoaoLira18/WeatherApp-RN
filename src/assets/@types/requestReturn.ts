
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
    weather: [
        [
            string
        ]
    ],
    wind: {
        deg: number,
        gust: number,
        speed: number
    }
}

export type ForecastType = {
    cod: string,
    message: number,
    cnt: number,
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
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
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

// export type Request = {
//     type: string
//     query: string
//     language: string
// }

// export type Location = {
//     name: string
//     region: string,
//     country: string,
//     localtime: string,
// }

// export type Current = {
//     is_day: string
//     precip: number
//     pressure: number
//     humidity: number
//     feelslike: number
//     wind_speed: number
//     visibility: number
//     cloudcover: number
//     wind_degree: number
//     temperature: number
//     observation_time: string
//     weather_icons: string[]
//     weather_descriptions: string[]
// }

// export interface Weather {
//     request: Request
//     current: Current
//     location: Location
// }
