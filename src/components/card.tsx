import React, { memo, useEffect, useState } from 'react'
import styled from "styled-components/native";
import { Alert, Dimensions, StyleSheet } from 'react-native';

import { Details } from "../screens/index";
import { CurrentType } from '../assets/@types/requestReturn';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from 'react-native-reanimated';

const cardWidth = (Dimensions.get('window').width) * 0.85;
const cardHeight = (Dimensions.get('window').height) * 0.25;

type props = {
    item: CurrentType
    removeCity: (city: string) => void
}

const Mist = '../assets/img/mist.jpg';
const Noon = '../assets/img/noon.png';
const Night = '../assets/img/night.png';
const Cloudy = '../assets/img/cloudy.png';
const SunSet = '../assets/img/sunset.png';
const Raining = '../assets/img/raining.png';
const Snowing = '../assets/img/snowing.jpg';
const SunRise = '../assets/img/sunrise.png';
// { name, main, sys, weather, timezone }
export const Card = ({ data, removeCity }: any) => {
    const now = new Date()
    const start = useSharedValue(0)
    const offset = useSharedValue(0)
    const [visible, setVisible] = useState(false)

    const backgroundHandler = () => {
        const hour = new Date().getHours()
        const weather = data.weather[0].description.toLowerCase()

        if (weather.match(/sunny/)) {
            return require(Noon)
        } else if (weather.match(/snow/)) {
            return require(Snowing)
        } else if (weather.match(/clear/) && hour >= 21 || hour <= 5) {
            return require(Night)
        } else if (weather.match(/rain/)) {
            return require(Raining)
        } else if (weather.match(/cloud/) || weather.match(/overcast/)) {
            return require(Cloudy)
        } else if (weather.match(/mist/)) {
            return require(Mist)
        } else if (hour >= 20 && hour <= 23) {
            return require(Night)
        } else if (hour >= 0 && hour < 5) {
            return require(Night)
        } else if (hour >= 5 && hour < 11) {
            return require(SunRise)
        } else if (hour >= 11 && hour < 18) {
            return require(Noon)
        } else if (hour >= 18 && hour < 20) {
            return require(SunSet)
        }
    }

    const animatedStyle = useAnimatedStyle(() => {

        const translateX = interpolate(offset.value, [0, -100], [0, -100], 'clamp')
        const opacity = interpolate(offset.value, [0, -100], [1, 0.6], 'clamp')

        return {
            transform: [
                { translateX }
            ],
            opacity
        }
    })

    const eventHandler = useAnimatedGestureHandler({

        onActive: (event) => {
            offset.value = event.translationX + start.value
        },
        onEnd: () => {
            offset.value < -100
                ? start.value = -100
                : offset.value > 0
                    ? start.value = 0
                    : start.value = offset.value
        },
    })

    const createTwoButtonAlert = () => {
        Alert.alert(
            "Remove",
            "Do you want to remove this city ?",
            [
                { text: "No", onPress: () => null, style: "cancel" },
                { text: "Yes", onPress: () => removeCity(data.name) },
            ]
        );
    }

    return (
        <Container onPress={() => setVisible(true)} onLongPress={() => createTwoButtonAlert()}>
            {/* <PanGestureHandler onGestureEvent={eventHandler}  > */}
            {/* <Animated.View style={[animatedStyle, styles.animatedView]} onTouchEnd={() => setVisible(true)} > */}
                <ImageBackground
                    resizeMode={"cover"}
                    source={backgroundHandler()}
                    imageStyle={{ borderRadius: 15 }}
                >
                    <TextContainer>
                        <EmphasisText>{`${data.main.temp}°C`}</EmphasisText>
                        <Text>{`${data.name}, ${data.sys.country}`}</Text>
                        <Text>{`${data.weather[0].description}`}</Text>
                    </TextContainer>
                    <TextDiscreet>{`${now}`}</TextDiscreet>

                    <DetailsModal
                        visible={visible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => {
                            setVisible(!visible);
                        }}
                    >
                        <Details
                            data={data}
                            modalVisible={() => setVisible(false)}
                        />
                    </DetailsModal>
                </ImageBackground>
            {/* </Animated.View> */}
            {/* </PanGestureHandler> */}
        </Container>
    )
}

const styles = StyleSheet.create({
    animatedView: {
        flexDirection: 'row'
    }
})

const Container = styled.TouchableOpacity`
    align-self: center;
    margin-bottom: 15px;
`;

const ImageBackground = styled.ImageBackground`
    width: ${cardWidth}px;
    padding-top: 10px;
    height: ${cardHeight}px;
    align-items: center;
`;

const EmphasisText = styled.Text`
    color: white;
    font-size: 54px;
    font-weight: 600;
`;

const Text = styled.Text`
    color: white;
    font-size: 26px;
    font-weight: 500;
    line-height: 25px;
`;

const TextDiscreet = styled.Text`
    color: white;
    opacity: 0.8;
    font-size: 16px;
    font-weight: 400;
    align-self: center;
    padding-top: 20px;
`;

const TextContainer = styled.View``;

const DetailsModal = styled.Modal``;

const Touchable = styled.TouchableOpacity`
    width: 50px;
    height: ${cardHeight}px;
    align-items: center;
    justify-content: center;
`
