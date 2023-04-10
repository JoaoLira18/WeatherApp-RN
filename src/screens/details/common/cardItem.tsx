import React from "react";
import styled from "styled-components/native";
import { Icon } from "../../../components";

type infoCard = {
    data: string;
    color?: string;
    iconLib: string;
    iconName: string;
    description: string;
}

export const CardItem = ({ iconName, iconLib, data, description, color = "white" }: infoCard) => {

    return (
        <Container>
            <Icon name={iconName} lib={iconLib} size={20} color={color} />
            <DataText>{data}</DataText>
            <DescriptionText>{description}</DescriptionText>
        </Container>
    )
}

const Container = styled.View`
    align-items: center;
    width: 100px;
`

const DataText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin-top: 5px;
`;

const DescriptionText = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.5;
`;
