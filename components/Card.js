import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native'

const Card = (props, hey) => 
<Container>
    <Cover>
        <ImageBG source={props.image} />
        <Image source={require("../assets/gradient-reverse.png")} 
        style={{width:"100%", height: 150, position: "absolute", bottom: 0}} />
        <Title>{props.title}</Title>
        <TimeContainer>
            <ImageLive 
            source={require("../assets/live.png")} 
            style={{ resizeMode: "contain", width: 15 }}/>
            <TimeStampText>Live in:</TimeStampText>
            <TimeStamp>{props.timestamp}</TimeStamp>
        </TimeContainer>
    </Cover>
    <Content>
        <Logo source={props.logo} />
        <Wrapper>
            <Caption>{props.caption}</Caption>
            <Subtitle>{props.subtitle}</Subtitle>
        </Wrapper>
    </Content>
</Container>;

export default Card; 

const Wrapper = styled.View`
flex-direction: column;
margin-left:10px;
`;

const Content = styled.View`
padding-left:20px;
flex-direction: row;
align-items: center;
height: 70px;
`;

const Logo = styled.Image`
width: 44px;
height: 44px;
border-radius: 22px;
`;

const Caption = styled.Text`
color: #3c4560;
font-size: 16px;
font-weight: bold;
`;

const Subtitle = styled.Text`
color: #b8bece;
font-weight: 600;
font-size: 13px;
text-transform: uppercase;
margin-top: 4px;
`;

const Container = styled.View `
background: white;
width: 315px;
height: 320px;
border-radius:14px;
margin-left:20px;
margin-top:20px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const Cover = styled.View `
    width: 100%;
    height:250px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const ImageBG = styled.Image `
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const Title = styled.Text `
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    position: absolute; bottom: 20px;
    width:180px;
`;

const TimeContainer = styled.View`
position:absolute;
right: 15px;
bottom: 20px;
border-radius:12px;
`;

const TimeStamp = styled.Text`
color: white;
text-align: right;
`;

const TimeStampText = styled.Text`
color: white;
text-align: right;
`;

const ImageLive = styled.Image`
position: absolute;
right: 50px;
top: -4px;
`;