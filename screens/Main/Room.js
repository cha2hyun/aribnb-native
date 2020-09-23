import React, { useEffect } from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView``;

const Text = styled.Text``;

export default ({ route: { params }, navigation }) => {
    useEffect(() => {
        navigation.setOptions({ title: params.name });
    }, []);
    return (
        <Container>
            <Text>Room</Text>
        </Container>
    );
};
