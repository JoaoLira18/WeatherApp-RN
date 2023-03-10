import React from "react";
import styled from "styled-components/native";

export const Splash = () => {
    return <Container>
        <Logo source={require("../../assets/img/logo.png")} />
    </Container>
}

const Container = styled.View`
    flex: 1;
    background-color: #1C3F65;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.Image`
       
`