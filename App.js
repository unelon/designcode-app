import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import styled from "styled-components";
import Card from './components/Card';
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from './components/Icons';
import Logo from "./components/Logo";
import Course from './components/Course';

export default function HomeScreen() {
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
          <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}> 
          {logos.map((logo, index) => (
            <Logo
            key={index}
            image={logo.image} 
            text={logo.text}
            />
          ))}   
          </ScrollView>
          <Subtitle>Upcoming Webinars</Subtitle>
          <ScrollView horizontal={true} style={{ paddingBottom: 30 }} 
          showsHorizontalScrollIndicator={false}>
            {cards.map((card, index) => (
            <Card 
            key={index}
            title={card.title} 
            image={card.image} 
            caption={card.caption} 
            subtitle={card.subtitle} 
            logo={card.logo}
            timestamp={card.timestamp}
            />
            ))}
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          {courses.map((course, index) => (
            <Course 
            key={index}
            image={course.image}
            title={course.title}
            subtitle={course.subtitle}
            logo={course.logo}
            author={course.author}
            avatar={course.avatar}
            caption={course.caption}
            />
          ))}
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
margin-top: 10px;
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

const logos = [
  {
    image: require("./assets/logo-1.jpg"),
  },
  {
    image: require("./assets/logo-2.jpg"),
  },
  {
    image: require("./assets/logo-3.jpg"),
  },
  {
    image: require("./assets/logo-4.jpg"),
  },
  {
    image: require("./assets/logo-5.jpg"),
  },
  {
    image: require("./assets/logo-6.jpg"),
  }
];

const cards = [
  {
    title: "Psykologisk manipulation",
    image: require("./assets/bg-zevio-1.jpg"),
    subtitle: "Psykologi",
    caption: "Niels Krøjgaard",
    logo: require("./assets/img-zevio-1.jpg"),
    timestamp: "12 hours",
  },
  {
    title: 'Jeg hater ordet "naturlig"',
    image: require("./assets/img-zevio-2.jpg"),
    subtitle: "Climate and environment",
    caption: "Sunniva Rose",
    logo: require("./assets/img-zevio-2.jpg"),
    timestamp: "1 day 4 hours",
  },
  {
    title: "Slug kamelen - der kommer flere",
    image: require("./assets/img-zevio-3.jpg"),
    subtitle: "Parenting",
    caption: "Flemming Møldrup, Julie Ralund",
    logo: require("./assets/img-zevio-3.jpg"),
    timestamp: "1 day 22 hours",
  },
  {
    title: "Vänligare och smartare arbetsplats",
    image: require("./assets/img-zevio-4.jpg"),
    subtitle: "Organizational Change",
    caption: "Dennis Nørmark",
    logo: require("./assets/img-zevio-4.jpg"),
    timestamp: "2 day 14 hours",
  }
];

const courses = [
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Rune Lillevang",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "Learn Photoshop",
    subtitle: "6 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Rune Lillevang",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Rune Lillevang",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Rune Lillevang",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "Prototype in Invision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Rune Lillevang",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
];
