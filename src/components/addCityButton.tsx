import styled from 'styled-components/native'
import { StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { Icon } from "./icon";
import { DataFromRequestType } from "../assets/@types/type";
import { RequestWeather } from '../services/api/requestWeather';

const { width } = Dimensions.get('screen')

export const AddCountryButton = ({ dataFromRequest }: DataFromRequestType) => {
    // HTMLInputElement
    const ref_input = useRef<any>();
    const offset = useSharedValue(0)
    const [textInput, setTextInput] = useState('')
    const [showAnimation, setShowAnimation] = useState(false)

    useEffect(() => {
        showAnimation && ref_input.current.focus()
    }, [showAnimation])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: offset.value
        };
    })

    const animate = (val: number, duration = 500) => {
        return withTiming(val, { duration })
    }

    const search = async (city: string) => {
        if (showAnimation == false) {
            setShowAnimation(!showAnimation)
            offset.value = animate(width - 20)
        } else if (showAnimation && textInput.length > 0) {
            await RequestWeather.getCurrent(city)
                .then(({data}: any) => {
                    dataFromRequest(data)
                    setTextInput('')
                })
        } else {
            setShowAnimation(!showAnimation)
            offset.value = animate(0)
        }
    }

    return <SearchView>
        <Animated.View style={[animatedStyle, styles.input]} >
            <SearchInput
                ref={ref_input}
                value={textInput}
                returnKeyType="next"
                onChangeText={setTextInput}
                placeholder={'Country or City Name'}
            />
        </Animated.View>
        <SearchButton onPress={() => search(textInput)}>
            <Icon name="plus-circle" size={35} lib="Feather" />
        </SearchButton>
    </SearchView >
}

const styles = StyleSheet.create({
    input: {
        height: 60,
    }
})

const SearchView = styled.View`
    width: 100%;
    height: 60px;
    overflow: hidden;
    margin-left: 10px;
    flex-direction: row;
    border-radius: 40px;
    justify-content: flex-end;
`;

const SearchInput = styled.TextInput`
    height: 60px;
    padding: 15px;
    font-size: 17px;
    background-color: #D9D9D9;
`;

const SearchButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
`;
