import React from "react";
import styled from "styled-components/native";
import { FlatList, FlatListProps, Image } from 'react-native';

import { Card } from "./card";
import { CurrentType } from "../assets/@types/requestReturn";

type WeatherPlaceListType = {
    dataFromRequest: CurrentType[] | []
    removeCity: (city: string) => void
    loading: boolean
}

export const WeatherPlacesList = ({ dataFromRequest, removeCity, loading }: WeatherPlaceListType) => {

    let reversedArray = dataFromRequest.slice(0).reverse()

    return (
        loading
            ? <Center><LoadList /></Center>
            : dataFromRequest.length > 0
            && <ListPlaces
                data={reversedArray}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item: CurrentType) => item.name}

                renderItem={({ item }) =>
                    <Card data={item} removeCity={(city) => removeCity(city)} />
                }
            />
        // : <Center>
        //     <Image
        //         style={{ width: 150, height: 150 }}
        //         source={require("../assets/img/not-found-destination.png")}
        //     />
        //     <Text>Without place or connection</Text>
        // </Center>
    )
}

const ListPlaces = styled(FlatList as new (props: FlatListProps<CurrentType>) => FlatList<CurrentType>)``;

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

const LoadList = styled.ActivityIndicator``
