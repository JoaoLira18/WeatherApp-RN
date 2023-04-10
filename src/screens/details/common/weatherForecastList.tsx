import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ForecastItem } from "./forecastItem";
import { FlatList, FlatListProps } from 'react-native';
import { ForecastType, list } from "../../../assets/@types/requestReturn";

type WeatherForecastListType = {
    forecastData: ForecastType
}

export const WeatherForecastList = ({ forecastData }: WeatherForecastListType) => {

    console.log(forecastData)

    const [data, setData] = useState<list[]>()

    useEffect(() => {
        forecastData !== undefined && setData(getDataFromFirstDay())
        
    }, [forecastData])

    const getDataFromFirstDay = () => {
        const actualDay = ('0' + new Date().getDate()).slice(-2)
        const newData = forecastData.list.filter((item: list) => {
            const day = item.dt_txt.split(' ')[0].split('-')[2];
            console.log(day, actualDay);
            return day == actualDay;
          });
        return newData
    }

    return (
        <ForecastList
            data={data}
            keyExtractor={item => item.dt}
            renderItem={({ item }) => (
                <ForecastItem forecastData={item} />
            )}
            horizontal
        />
    )
}

const ForecastList = styled(FlatList as new (props: FlatListProps<any>) => FlatList<any>)``;
