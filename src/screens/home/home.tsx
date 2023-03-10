import { Alert, StatusBar } from "react-native";
import styled from "styled-components/native";
import React, { useEffect, useState } from "react";
import { CurrentType } from "../../assets/@types/requestReturn";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from "../../components";
import { WeatherPlacesList } from '../../components/weatherPlacesList';
import { RequestWeather } from "../../services/api/requestWeather";

export const Home = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<CurrentType[] | []>([])
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        if (firstRender == true) {
            setLoading(true)
            setFirstRender(false)
            getData()
        } else {
            storeData()
        }
    }, [data])

    const storeData = async () => {

        const storageKey = '@cities'
        const cities = data.map((item: any) => item.name)

        try {
            await AsyncStorage.setItem(storageKey, JSON.stringify(cities))
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        try {
            const storageKey = '@cities'
            const dataFromAsync = await AsyncStorage.getItem(storageKey)
            const cities = dataFromAsync ? JSON.parse(dataFromAsync) : []

            if (cities !== null) {
                cities.forEach(async (city: any) => {
                    await RequestWeather.getCurrent(city)
                        .then(({ data }: any) => {
                            validatingData(data)
                        })
                });
            }
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => { setLoading(false) }, 500)
        }
    }

    const validatingData = (newData: CurrentType) => {
        let repeated = data.some(item => item.name === newData.name)
        !repeated && setData((prevState) => [...prevState, newData])
    }

    const removeCity = (city: string) => {

        let newData: CurrentType[] = []

        data.forEach((item) => {
            item.name !== city && newData.push(item)
        })
        newData.length !== 0 ? setData(newData) : setData([])
    }

    return <Container>
        <StatusBar backgroundColor="#1C3F65" barStyle="light-content" />
        <Header dataFromRequest={(data: any) => validatingData(data)} ></Header>
        <Body>
            <WeatherPlacesList
                loading={loading}
                dataFromRequest={data}
                removeCity={(city: string) => removeCity(city)}
            />
        </Body>
    </Container>
}

const Container = styled.View`
    flex: 1;
    background-color: #1C3F65;
    padding-left: 10px;
    padding-right: 10px;
`;

const Body = styled.View`
margin-top: 15px;
    margin-bottom: 80px;
`;

const CenterLoad = styled.View`
    height: 90%;
    align-items: center;
    justify-content: center;
`;

const LoadList = styled.ActivityIndicator``

const Center = styled.View`
    width: 100%;
    height: 500px;
    align-items: center;
    justify-content: center;
`

const Text = styled.Text`
    font-size: 24px;
    color: #ffffff6c;
`