import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import { Icon } from "../../components/index";
import { CurrentType } from '../../assets/@types/requestReturn';

import { PanGestureHandler, gestureHandlerRootHOC } from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useSharedValue,
    interpolate,
    useAnimatedStyle,
    useAnimatedGestureHandler,
} from "react-native-reanimated";

type props = {
    data: CurrentType
    modalVisible: () => void
}

export const Details = gestureHandlerRootHOC(({ modalVisible, data }: any) => {

    const start = useSharedValue(350)
    const offset = useSharedValue(350)

    const closeModal = (event: any) => {
        event.absoluteY > 500 && modalVisible()
    }

    const eventHandler = useAnimatedGestureHandler({
        onActive: (event, ctx) => {
            offset.value = event.translationY + start.value
        },
        onEnd: (event, ctx) => {
            runOnJS(closeModal)(event)
            start.value = offset.value
        },
    })

    const animatedStyle = useAnimatedStyle(() => {

        const translateY = interpolate(offset.value, [350, 750], [350, 750], 'clamp')
        return {
            transform: [
                { translateY: translateY },
            ],
        }
    })

    return (
        <Animated.View style={[styles.detailsModal, animatedStyle]}>
            <PanGestureHandler onGestureEvent={eventHandler} hitSlop={styles.hitSlop} >
                <ModalButton />
            </PanGestureHandler>
            <TextContainer>
                <EmphasisText>{`${data.main.temp}°C`}</EmphasisText>
                <Text>{`Feelslike: ${data.main.fells_like}°C`}</Text>
                <Text>{`Humidity: ${data.main.humidity}%`}</Text>
                <Text>{`Wind Speed: ${data.wind.speed} km/h`}</Text>
                <Text>{`Pressure: ${data.main.pressure} MB-milibar`}</Text>
            </TextContainer>
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
        backgroundColor: "#1A599E",
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
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;

const EmphasisText = styled.Text`
    color: white;
    font-size: 60px;
    margin-top: 5px;
    font-weight: 600;
`;

const Text = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 500;
    line-height: 25px;
    padding-bottom: 8px;
`;

const TextContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

const ModalButton = Animated.createAnimatedComponent(styled.View`
    width: 160px;
    height: 10px;
    margin-top: 6px;
    border-radius: 10px;
    align-self: center;
    background-color: #0F2547;
`);

// export const Container = Animated.createAnimatedComponent(styled.View``)