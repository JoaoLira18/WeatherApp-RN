import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Icon } from "../../../components";
import { ForecastType, list } from "../../../assets/@types/requestReturn";

type ForecastItemType = {
    forecastData: list
}

export const ForecastItem = ({ forecastData }: ForecastItemType) => {

    const FormatDate = () => {
        const time = new Date(forecastData.dt_txt)
        return time.getDay() + '/' + time.getMonth() + '/' + time.getFullYear()
    }

    const FormatHours = () => {
        const time = new Date(forecastData.dt_txt)
        return time.getHours() + ':00'
    }

    return (
        <Container>
            <HeaderText>{forecastData.main.temp.toFixed()}°C</HeaderText>
            <Icon name={"night-alt-cloudy"} lib={"Fontisto"} size={40} color={"white"} />
            <Wrapper>
                <Text>{((forecastData.pop) * 100).toFixed()}%</Text>
                <Icon name={"rainy"} lib={"Ionicons"} size={15} color={"white"} style={{ opacity: 0.5 }} />
            </Wrapper>
            <TimeText>{FormatDate()}</TimeText>
            <TimeText>{FormatHours()}</TimeText>
        </Container>
    )
}
// forecastData.dt_txt.split(' ')[1]
const Container = styled.View`
    padding: 5px;
    width: 120px;
    height: 180px;
    margin-top: 20px;
    margin-left: 10px;
    border-radius: 15px;
    align-items: center;
    align-self: flex-start;
    background-color: #202225;
    justify-content: space-around;
`

const HeaderText = styled.Text`
    color: white;
    font-size: 34px;
    font-weight: bold;
`

const Text = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-right: 5px;
    opacity: 0.5;
`

const TimeText = styled.Text`
    opacity: 0.5;
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
`

const Wrapper = styled.View`
    align-items: center;
    flex-direction: row;
`;
