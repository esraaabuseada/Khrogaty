
import React, { Component } from 'react';
import { ImageBackground, Image, View,AsyncStorage } from 'react-native';
import { Container, Icon, Text, Button } from 'native-base';

type Props = {};
export default class Onboarding extends Component<Props> {
    state = { icon: 0 }
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container style={{ alignContent: "center", justifyContent: "center", alignItems: 'center' }}>
           
        
                {this.changeIcons()}

                {this.saveDate()}
            </Container>
        );
    }
  
    changeIcons() {
        if (this.state.icon === 0) {
            return (

                <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/screen1.png')}
 
                
                    style={{
                        width: '100%', height: '100%', resizeMode: 'contain',
                        alignContent: "center", justifyContent: "center", alignItems: 'center'
                    }}>
                    <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Logo/logo.png')}
                        style={{ width: 100, height: 100, margin: 165 }} />

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                        <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/VectorIcons/home-first-icon.png')} 
                            style={{ width: 50, height: 50}} />
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Places For GoingOut</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <View style={{width: 250}}/>

                    <Button transparent onPress={() => {
                            this.setState({ icon: ++this.state.icon });
                        }} >
                        <Text style={{color:'black'}}>Next</Text>
                        </Button>
                        <Icon name="chevron-small-right" type="Entypo" style={{marginTop:10}}/>
                    </View>
                </ImageBackground>
            );
        } else if (this.state.icon === 1) {
            return (
                <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/onboarding-bg-right.png')}
                    style={{
                        width: '100%', height: '100%', resizeMode: 'contain',
                        alignContent: "center", justifyContent: "center", alignItems: 'center'
                    }}>
                    <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Logo/logo.png')}
                        style={{ width: 100, height: 100, margin: 165 }} />

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                        <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/VectorIcons/home-second-icon.png')}
                            style={{ width: 50, height: 50}} />

                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Restaurants and Coffe Shops</Text>
                    </View>

                    <View style={{  flexDirection: 'row' }}>
                        <Icon name="chevron-small-left" type="Entypo" style={{marginTop:10}}/>
                        <Button transparent onPress={() => {
                            this.setState({ icon: --this.state.icon });
                        }} >
                        <Text style={{color:'black'}}>Prev</Text>
                        </Button>
                        <Button transparent onPress={() => {
                            this.setState({ icon: ++this.state.icon });
                        }} >
                        <View style={{width: 150}}/>
                        <Text style={{color:'black'}}>Next</Text>
                        </Button>
                        <Icon name="chevron-small-right" type="Entypo" style={{marginTop:10}}/>
                    </View>
                </ImageBackground>
            );
        } else if (this.state.icon === 2) {
            return (
                <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/screen1.png')}
                    style={{
                        width: '100%', height: '100%', resizeMode: 'contain',
                        alignContent: "center", justifyContent: "center", alignItems: 'center'
                    }}>
                    <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Logo/logo.png')}
                        style={{ width: 100, height: 100, margin: 165 }} />

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                        <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/VectorIcons/home-third-icon.png')}
                            style={{ width: 50, height: 50 }} />
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>What Do I Do?</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="chevron-small-left" type="Entypo" style={{marginTop:10}}/>
                        <Button transparent onPress={() => {
                            this.setState({ icon: --this.state.icon });
                        }} >
                        <Text style={{color:'black'}}>Prev</Text>
                        </Button>
                        <View style={{width: 150}}/>
                        <Button rounded success style={{width: 100, justifyContent: "center"}}  onPress={() => {
                            this.props.navigation.navigate('Home')
                        }}>
                            <Text>Start</Text>
                        </Button>
                    </View>
                </ImageBackground>
            );

            
        }
    }
    saveDate(){
        AsyncStorage.setItem("here", "yes")
  }
}