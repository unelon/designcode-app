import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from "styled-components";
import Card from './components/Card';
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from './components/Icons';

export default function App() {
  return (
    <Container>
      <SafeAreaView>      
        <ScrollView style={{ height: "100%" }}>
          <Titlebar>
            <Avatar source={require('./assets/avatar.jpg')} />
          <Title>Welcome back,</Title>
          <Name>Rune</Name>
          <NotificationIcon 
          style={{ position:'absolute', right: 20, top: 5 }}
          />
          </Titlebar>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal={true} style={{ paddingBottom: 30 }} 
          showsHorizontalScrollIndicator={false}>
            <Card 
            title="Styled Components" 
            image={require('./assets/background2.jpg')} 
            caption="dsa" 
            subtitle="Fantastisk emne" 
            logo={require('./assets/logo-react.png')}
            />
            <Card 
            title="Styled Components" 
            image={require('./assets/background5.jpg')} 
            caption="dsa" 
            subtitle="Fantastisk emne" 
            logo={require('./assets/logo-react.png')}
            />
            <Card 
            title="Styled Components" 
            image={require('./assets/background8.jpg')} 
            caption="dsa" 
            subtitle="Fantastisk emne" 
            logo={require('./assets/logo-react.png')}
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text `
color: #b8bece;
font-weight: 600;
font-size: 15px;
margin-left: 20px;
margin-top: 50px;
text-transform: uppercase;
`

const Container = styled.View`
flex: 1;
background-color: #f0f3f5;
`;

const Title = styled.Text`
font-size: 16px;
color: #b8bece;
font-weight:500;
`;

const Name = styled.Text`
font-size:20px;
color: #3c4560;
font-weight:bold;
`;

const Titlebar = styled.View`
width: 100%;
margin-top: 50px;
padding-left:80px;
`;

const Avatar = styled.Image`
width: 44px;
height: 44px;
background: black;
border-radius: 22px;
margin-left: 20px;
position:absolute;
top: 0;
left: 0;
`;


