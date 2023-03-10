import { Alert } from "react-native"
import { api } from "./axios"
import Constants from '../../constants/apiAccessToken'

export const RequestWeather = {
    getCurrent: (city: string) => {
        return api.get(`weather?q=${city}&appid=${Constants.ApiAccessKey}&units=metric`)
    },
    getForecast: (lat: number, lon: number) => {
        return api.get(`forecast?lat=${lat}&lon=${lon}&appid=${Constants.ApiAccessKey}&units=metric`)
    }
}
