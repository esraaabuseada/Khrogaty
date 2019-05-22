/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform,Image, View,ImageBackground,StyleSheet} from 'react-native';
import { Text,Container,Spinner, CardItem, Content, Left, Body, Right, Item,Card,Button } from 'native-base';
import {  FlatList } from 'react-navigation';




type Props = {};
export default class App extends Component<Props> {
  state = { doArray: [] ,loaded: 0,title:"Things To Do"}
    
    getDo(){
      fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2")
            .then((response)=> response.json())
            .then((resJson)=>{
                this.setState({
                doArray: resJson, loaded: 1}, function(){
                    console.log(resJson);
                });
            })
    }
componentDidMount(): void {this.getDo()}
  render() {
    return (
      
      <Container>
         <View style={{ height: '15%' }}>
        <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/theme-header.png')}
          style={{ width: '100%', height: '100%', flexDirection:'row'}}>
             
            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', flex:3,marginTop:50,marginLeft:20}}>{this.state.title}</Text>
        </ImageBackground>
        </View>
      
<Content  >
   {this.returnDO()}
   </Content>
     </Container>
    
    );
  }

  
returnDO(){
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
        data={this.state.doArray}
        renderItem={({item}) =>
     

                  <Card key={item.id}>
                      <CardItem style={{flexDirection:"row"}} button onPress={()=>{
                          this.props.navigation.navigate('Details', {title: item.title.rendered, image: item.better_featured_image.source_url, content: item.content.rendered})
                      }}>
                          <Left>
                              <Image
                                  style={{width:'90%', height: 200, borderRadius: 10}}
                                  source={{uri: item.better_featured_image.source_url}} />
                          </Left>
                          <Body >
                          <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18 }}>{item.title.rendered}</Text>
                  <View style={{ flexDirection: 'row' }}>
                  <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/map-marker.png')} style={{ width: 15, height: 15 }} />
                  <Text style={{ color: 'green', fontSize: 12 }}>{item.acf.address}</Text>
                </View>
                  <Text style={{ color: 'gray', margin: 10, fontSize: 15 }}>{item.excerpt.rendered}</Text>
                  <Button rounded success style={{width: "100%", height: 30, justifyContent: "center", borderRadius: 10, marginBottom:0}}
                    onPress={() => {
                            this.props.navigation.navigate('Details', {id: item.id, title: item.title.rendered, image: item.better_featured_image.source_url, content: item.content.rendered, 
                                address: item.acf.address,
                                phone: item.acf.phone_number, email: item.acf.email_address,
                                map: item.acf.map_location})
                                
                                this.props.navigation.navigate('Details', {mapLoc: item.acf.map_location})
                                
                                }}>
                        <Text>Details</Text>
                    </Button>
                          </Body>
                      </CardItem>
                  </Card>}
                   />
              );
          
      

  }


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
