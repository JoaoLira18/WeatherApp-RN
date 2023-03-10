import React from "react";
import styled from "styled-components/native";

import { AddCountryButton } from "./addCityButton";

export const Header = ({ dataFromRequest }: any) => {
    return (
        <Container>
            <AddCountryButton dataFromRequest={(data: any) => dataFromRequest(data)} />
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    align-items: flex-end;
    padding-bottom: 10px;
`;