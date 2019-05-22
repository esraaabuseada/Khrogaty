import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { Image } from 'react-native';
import About from './About';
import Map from './Map';
import MyHeader from './MyHeader'

export default class Details extends Component {
  state = { currentTab: 0 }
  static navigationOptions = {
    header: null,
  };
  methodAbout(){
    if(this.state.currentTab==0){
      return  (<Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/gabout.png')} style={{ width: 20, height: 20 }} />)
    } else {
      return  (<Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/about.png')} style={{ width: 20, height: 20 }} />) 
    }
  }

  methodMap(){
    if(this.state.currentTab==1){
      return  (<Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/map-marker.png')} style={{ width: 20, height: 20 }}  />)
    } else {
      return  (<Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/grey-map-marker.png')} style={{ width: 20, height: 20 }} />) 
    }
  
  }
  render() {
    return (
      <Container>
         <MyHeader title={this.props.navigation.getParam('title')}/>

        <Tabs tabBarBackgroundColor={{ backgroundColor: 'white' }} 
              tabBarUnderlineStyle={{ backgroundColor: 'green' }}
              onChangeTab={({ i }) => this.setState({ currentTab: i })} >
            <Tab  heading={<TabHeading
              style={this.state.currentTab == 0 ? { backgroundColor: 'white' } : { backgroundColor: 'white' }}>
              {this.methodAbout()}
              <Text style={this.state.currentTab == 0 ? {color:'green'} : {color:"Black"}} >About</Text></TabHeading>}>
              <About id={this.props.navigation.getParam('id')}  title={this.props.navigation.getParam('title')} image={this.props.navigation.getParam('image')} content={this.props.navigation.getParam('content')
              } address={this.props.navigation.getParam('address')} phone={this.props.navigation.getParam('phone')} email={this.props.navigation.getParam('email')} />
            </Tab>
            <Tab heading={<TabHeading style={this.state.currentTab == 1 ? { backgroundColor: 'white' } : { backgroundColor: 'white' }}>
            {this.methodMap()}
              <Text style={this.state.currentTab == 1 ? {color:'green'} : {color:"Black"}}>Map</Text></TabHeading>}>
              <Map mapLoc={this.props.navigation.getParam('mapLoc')} title={this.props.navigation.getParam('title')}   />
            </Tab>    
            </Tabs>
          </Container>
    );
  }

}