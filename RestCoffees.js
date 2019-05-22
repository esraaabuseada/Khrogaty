import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { Image,View,ImageBackground } from 'react-native';

import Resturants from './Resturants';
import MyHeader from './MyHeader'

export default class Details extends Component {
  state = { currentTab: 0,title:"Rest /Coffees" }
  static navigationOptions = {
    header: null,
  };
 
  render() {
    return (
      <Container>
     <View style={{ height: '15%' }}>
        <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/theme-header.png')}
          style={{ width: '100%', height: '100%', flexDirection:'row'}}>
             
            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', flex:3,marginTop:25,marginLeft:20}}>{this.state.title}</Text>
        </ImageBackground>
      </View>

        <Tabs tabBarBackgroundColor={{ backgroundColor: 'white' }} 
              tabBarUnderlineStyle={{ backgroundColor: 'black' }}
              onChangeTab={({ i }) => this.setState({ currentTab: i })} >
            <Tab  heading={<TabHeading
              style={this.state.currentTab == 0 ? { backgroundColor: 'white' } : { backgroundColor: 'white' }}>
              
              <Text style={this.state.currentTab == 0 ? {color:'black'} : {color:"gray"}} >All</Text></TabHeading>}>
             <Resturants/>
            </Tab>
            <Tab heading={<TabHeading style={this.state.currentTab == 1 ? { backgroundColor: 'white' } : { backgroundColor: 'white' }}>
            
              <Text style={this.state.currentTab == 1 ? {color:'black'} : {color:"gray"}}>Resturants</Text></TabHeading>}>
              <Resturants/>
            </Tab>  
            <Tab  heading={<TabHeading
              style={this.state.currentTab == 0 ? { backgroundColor: 'white' } : { backgroundColor: 'white' }}>
              
              <Text style={this.state.currentTab == 0 ? {color:'black'} : {color:"gray"}} >Coffee Shops</Text></TabHeading>}>
             <Resturants/>
            </Tab>  
            </Tabs>
          </Container>
    );
  }

}