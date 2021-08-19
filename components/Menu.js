import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ICONS } from "jest-util/build/specialChars";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return { action: state.action }
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {

    state = {
        top: new Animated.Value(900)
    };

    componentDidMount() {
        Animated.spring(this.state.top, {
            toValue: 0,
            useNativeDriver: false
        }).start();
    }

    toggleMenu = () => {
        Animated.spring(this.state.top, {
            toValue: screenHeight,
            useNativeDriver: false
        }).start();
    }

    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
                <Cover />
                <TouchableOpacity onPress={this.toggleMenu} style={{ 
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
            </AnimatedContainer>
        )
    }
}

export default connect(mapStateToProps) (Menu);

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