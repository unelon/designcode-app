import React from 'react';
import styled from 'styled-components';

const Logo = props => ( 
    <Container>
        <Image source={props.image} reziseMode="contain" />
        <Text>{props.text}</Text>
    </Container>
);

const Container = styled.View`
flex-direction: row;
background: white;
height: 60px;
padding: 12px 16px 12px;
border-radius: 10px;
box-shadow: 0 5px 10px rgba(0,0,0, 0.25);
align-items: center;
margin: 0 8px;

`;

const Image = styled.Image`
width: 100px;
height: 30px;
`;

const Text = styled.Text`
font-weight: 600;
font-size: 17px;
margin-left: 8px;
`;

export default Logo;

