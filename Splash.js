

import React, {Component} from 'react';
import {ImageBackground, Image, AsyncStorage} from 'react-native';
import {Container, Spinner} from 'native-base';

type Props = {};
export default class Splash extends Component<Props> {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container  style={{ alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
                <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/splash.png')} 
                style={{width: '100%', height: '100%', resizeMode: 'contain', 
                alignContent: "center", justifyContent: "center", alignItems: 'center'}}>
                    <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Logo/logo.png')} style={{width: 100, height: 100}}/>
                    <Spinner color="#fff"/>
                </ImageBackground>
                {this.moveToHome()}
            </Container>
        );
    }

    moveToHome(){
        AsyncStorage.getItem("here").then((val)=>{
            setTimeout(()=>{
                if(val === "yes"){
                    this.props.navigation.navigate('Container');
                }else{
                    this.props.navigation.navigate('Onboarding');
                }
            }, 1000);
        });
    }
}