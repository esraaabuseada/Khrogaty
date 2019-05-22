import React, { Component } from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
class MyHeader extends Component<Props> {
  state = { title: this.props.title }
  render() {
    return (
      <View style={{ height: '15%' }}>
        <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/theme-header.png')}
          style={{ width: '100%', height: '100%', flexDirection:'row'}}>
            <Button transparent onPress={() => {
              this.props.navigation.goBack();
            }} style={{ flex:2,marginLeft:20, marginTop:40
            }}>
              <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/left-arrow.png')} style={{ width: '35%', height:'100%'}}/>
            </Button>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', flex:3, marginRight:60,marginTop:50,textAlign:'center'}}>{this.state.title}</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default withNavigation(MyHeader);