import React from "react";
import { CardItem } from "./cardItem";
import styled from "styled-components/native";
import { ForecastType } from "../../../assets/@types/requestReturn";

type InfoCardType = {
    forecastData: ForecastType
}

export const InfoCard = ({ forecastData }: InfoCardType) => {

    // console.log(forecastData.list[0].main.humidity)

    return (
        <Container>
            {
                forecastData !== undefined
                && <>
                    <CardItem data={`${forecastData.list[0].main.humidity}%`} iconLib={"Entypo"} iconName={"drop"} description={"Humidity"} />
                    <Divisor />
                    <CardItem data={`${forecastData.list[0].wind.speed}km/h`} iconLib={"Feather"} iconName={"wind"} description={"Wind Speed"} />
                    <Divisor />
                    <CardItem data={`${(forecastData.list[0].pop)*100}%`} iconLib={"Ionicons"} iconName={"rainy"} description={"Rain"} />
                </>
            }
        </Container>
    )
}

const Container = styled.View`
    width: 80%;
    height: 100px;
    margin-top: 20px;
    border: 1px solid;
    flex-direction: row;
    border-radius: 15px;
    align-items: center;
    border-color: white;
    justify-content: space-around;
`

const Divisor = styled.View`
    width: 1px;
    height: 70px;
    background-color: white;
`;