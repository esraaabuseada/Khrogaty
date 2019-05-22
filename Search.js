/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform,Image, View,ImageBackground,StyleSheet, ActivityIndicator} from 'react-native';
import { Text,Container,Spinner, CardItem, Content, Left, Body, Right, Item,Card,Header } from 'native-base';
import {  FlatList } from 'react-navigation';
import {   ListItem, SearchBar} from 'react-native-elements';

import MyHeader from './MyHeader'

type Props = {};
export default class Search extends Component<Props> {
  state = {title: "Search", placesArray:[] ,loaded: 0}
  static navigationOptions = {
    header: null,
};
  arrayholder = [];
    
    getPlaces(){
      fetch("http://reactnative.website/iti/wp-json/wp/v2/posts")
            .then((response)=> response.json())
            .then((resJson)=>{
                this.setState({
                  placesArray: '', loaded: 1}, function(){
                    console.log(resJson);
                });
                this.arrayholder=resJson
            })
            .catch(error => {
              this.setState({ loaded: 0 });
            });
    }

    componentDidMount(): void {this.getPlaces();}
    render() {
      return (
        
        <Container>
         <View style={{ height: '15%' }}>
        <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/theme-header.png')}
          style={{ width: '100%', height: '100%', flexDirection:'row'}}>
             
            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', flex:3, marginTop:50,marginLeft:20}}>{this.state.title}</Text>
        </ImageBackground>
      </View>
          {/* <MyHeader title={this.state.title}/> */}
        
 <Content>
     {this.returnPlaces()}
     
     </Content>
    
       </Container>
      
      );
    }

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '14%',
          }}
        />
      );
    };
  
    searchFilterFunction = text => {
      this.setState({
        value: text,
      });
  
      const newData = this.arrayholder.filter(item => {
        const itemData = `${item.title.rendered.toUpperCase()} `;
        const textData = text.toUpperCase();
  
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        placesArray: newData,
      });
    };
  
    renderHeader = () => {
      return (
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
        />
      );
    };
  
    ListEmpty = () => {
      return (
          //View to show when list is empty
          <View style={{width:300 , height: 330,flexDirection: 'column',marginTop:120,marginLeft:40,
          justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/VectorIcons/nosearch-icon.png')} style={{width: 250, height: 250,
                  justifyContent: 'center', alignItems: 'center'
              }} />
              <Text style={{textAlign:'center',color:'black'}}>Search For Any Places</Text>
          </View>
      );
  };
    returnPlaces(){
      if(this.state.loaded === 0){
          return(
              <View style={{alignItems: 'center', justifyContent: 'center',marginTop:50}}>
                  <Spinner/>
                  <Text>Loading</Text>
              </View>
          )
      }else {
          return(
            
        <FlatList
          data={this.state.placesArray}
          renderItem={({ item }) => (
            <ListItem
              //leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title={item.title.rendered }
              //subtitle={item.email}
            />
          )}
          ListEmptyComponent={this.ListEmpty}
          keyExtractor={item => item.title.render}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      
          );
                 
    
  
      }
  
  
  }
  
}
