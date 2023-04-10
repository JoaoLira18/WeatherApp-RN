import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import Animated, {
    runOnJS,
    useSharedValue,
    interpolate,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from "react-native-reanimated";
import { ForecastItem, Icon, WeatherForecastList } from "../../components";
import { CurrentType, ForecastType } from "../../assets/@types/requestReturn";
import { RequestWeather } from "../../services/api/requestWeather";
import { PanGestureHandler, gestureHandlerRootHOC } from "react-native-gesture-handler";
import { InfoCard } from "./common/infoCard";

type DetailsProps = {
    data: CurrentType
    modalVisible: () => void
}

export const Details = gestureHandlerRootHOC(({ data, modalVisible }: any) => {

    const [forecastData, setForecastData] = useState<ForecastType>()

    const start = useSharedValue(200)
    const offset = useSharedValue(200)

    useEffect(() => {
        getForecast()
    }, [])

    const closeModal = (event: any) => {
        event.absoluteY > 450 && modalVisible()
    }

    const eventHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            offset.value = event.translationY + start.value
        },
        onEnd: (event) => {
            runOnJS(closeModal)(event)
            start.value = offset.value
        },
    })

    const animatedStyle = useAnimatedStyle(() => {

        const translateY = interpolate(offset.value, [200, 718], [200, 718], 'clamp')
        return {
            transform: [
                { translateY: translateY },
            ],
        }
    })

    const getForecast = async () => {
        await RequestWeather.getForecast(data.coord.lat, data.coord.lon)
            .then(({ data }) => {
                setForecastData(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <Animated.View style={[styles.detailsModal, animatedStyle]}>
            <PanGestureHandler onGestureEvent={eventHandler} hitSlop={styles.hitSlop} >
                <ModalButton />
            </PanGestureHandler>
            <Wrapper>
                <TemperatureText>{`${data.main.temp.toFixed()}°C`}</TemperatureText>
                <InfoCard forecastData={forecastData!} />
            </Wrapper>
            <WeatherForecastList forecastData={forecastData!} />
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    icon: {
        padding: 10,
    },
    detailsModal: {
        top: 30,
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#363a3f",
    },
    hitSlop: {
        top: 20,
        left: 100,
        bottom: 20,
        right: 100,
    }
})

const Container = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
    flex-direction: row;
`;

const TemperatureText = styled.Text`
    color: white;
    font-size: 70px;
    margin-top: 10px;
    font-weight: 600;
`;

const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
`;

const ModalButton = Animated.createAnimatedComponent(styled.View`
    width: 160px;
    height: 10px;
    margin-top: 6px;
    align-self: center;
    border-radius: 10px;
    background-color: #1c1e20;
`);

// export const Container = Animated.createAnimatedComponent(styled.View``)