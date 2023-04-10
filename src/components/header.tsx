import React from "react";
import styled from "styled-components/native";
import { DataFromRequestType } from "../assets/@types/type";

import { AddCountryButton } from "./addCityButton";


export const Header = ({ dataFromRequest }: DataFromRequestType) => {
    return (
        <Container>
            <AddCountryButton dataFromRequest={(data) => dataFromRequest(data)} />
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    align-items: flex-end;
    padding-bottom: 10px;
`;