/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform,Image, View,ImageBackground,StyleSheet,WebView} from 'react-native';
import { Text,Container,Spinner, CardItem, Content, Left, Body, Right, Item,Card } from 'native-base';
import {  FlatList } from 'react-navigation';
import MyHeader from './MyHeader'




type Props = {};
export default class App extends Component<Props> {
 
    static navigationOptions = {
        header: null,
    };

    render() {
        return(
            <Container>
         
        <WebView
         source = {{uri: this.props.mapLoc}}
         style={{height:600, width : '100%'}}
  />
        </Container> 
           
        );
    }

 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
   height: null,
   padding:40,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  },
  socialIconsText: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 40,
    fontWeight:"bold"
    
    
},
});
