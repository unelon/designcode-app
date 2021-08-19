import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Dimensions } from "react-native";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";
import { ICONS } from "jest-util/build/specialChars";

const screenHeight = Dimensions.get("window").height;

const Menu = () => {
    const offset = useSharedValue(screenHeight || 0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            top: withSpring(offset.value),
        };
    });
    const toggleMenu = () => {
        offset.value = screenHeight
    }
    React.useEffect(() => {
        offset.value = 0
    }, [])

    return (
        <AnimatedContainer style={[animatedStyles]}>
            <Cover />
            <TouchableOpacity onPress={toggleMenu} style={{
                position: "absolute",
                top: 120,
                left: "50%",
                marginLeft: -22,
                zIndex: 1
            }}>
                <CloseView>
                    <Ionicons name="ios-close" size={44} color="#546bfb" />
                </CloseView>
            </TouchableOpacity>
            <Content />
        </AnimatedContainer >
    )
}
export default Menu


const CloseView = styled.View`
width: 44px;
height: 44px;
border-radius:22px;
background: white;
justify-content: center;
align-items: center
`;

const Container = styled.View`
position: absolute;
background: white;
width: 100%;
height: 100%;
z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
height: 142px;
background: black;
`;

const Content = styled.View`
height: ${screenHeight};
background: #f0f3f5
`;