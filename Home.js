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
  state = { placesArray: [],doArray: [],resArr: [] ,loaded: 0}
    static navigationOptions = {
        header: null,
    };

    getPlaces(){
      fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4")
            .then((response)=> response.json())
            .then((resJson)=>{
                this.setState({
                  placesArray: resJson, loaded: 1}, function(){
                    console.log(resJson);
                });
            })
    }
    getResturants(){
      fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3")
            .then((response)=> response.json())
            .then((resJson)=>{
                this.setState({
                  resArr: resJson, loaded: 1}, function(){
                    console.log(resJson);
                });
            })
    }
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
componentDidMount(): void {this.getPlaces();this.getResturants();this.getDo()}
  render() {
    return (
      
      <Container>
      <View  style={{height:190}}>
      <ImageBackground source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Backgrounds/home-header.png')}  style={[styles.container,{width:"100%",height:"100%" ,justifyContent:'center'}]} >      
      <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Logo/logo.png')} style={{width: 110, height: 110}}  />
     </ImageBackground>
     </View>

     <View>


     </View>
<Content  >
<Card transparent>
          <CardItem>
            <Left>
              <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/VectorIcons/home-first-icon.png')}
                style={{ width: 35, height: 35, borderRadius: 10 }} />
              <Body>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Places For GoingOut</Text>
              </Body>
            </Left>
            <Right>
              <Button transparent onPress={() => {
                this.setState({
                  section: 1
                });
                this.props.navigation.navigate('FindPlaces')}}>
                <Text style={{ fontWeight: 'bold', color: 'green', marginTop: 10 }}>View More</Text>
              </Button>
            </Right>
          </CardItem>
          </Card>

   {this.returnPlaces()}
   <Card transparent>
   <CardItem>
              <Left>
                <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/VectorIcons/home-second-icon.png')}
               
                  style={{ width: 35, height: 35, borderRadius: 10 }} />
                <Body>
                  <Text style={{ fontWeight: 'bold', marginTop: 10 }}>What Do I Do?</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent onPress={() => {
                    this.setState({
                      section: 1
                    });
                    this.props.navigation.navigate('Resturants')}}>
                    <Text style={{ fontWeight: 'bold', color: 'green', marginTop: 10 }}>View More</Text>
                </Button> 
              </Right>
            </CardItem>
            </Card>
  
   {this.returnResturants()}
   <Card transparent>
   <CardItem>
              <Left>
                <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/VectorIcons/home-third-icon.png')}
                  style={{ width: 35, height: 35, borderRadius: 10 }} />
                <Body>
                  <Text style={{ fontWeight: 'bold', marginTop: 10 }}>What Do I Do?</Text>
                </Body>
              </Left>
              <Right>
                <Button transparent onPress={() => {
                    this.setState({
                      section: 1
                    });
                    this.props.navigation.navigate('Thingstodo')}}>
                    <Text style={{ fontWeight: 'bold', color: 'green', marginTop: 10 }}>View More</Text>
                </Button> 
              </Right>
            </CardItem>
            </Card>
   {this.returnDO()}
   </Content>
  
     </Container>
    
    );
  }

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
          

          <FlatList horizontal={true}  
          data={this.state.placesArray}
          renderItem={({item}) =>
       



                    <Card key={item.id}>
                        <CardItem style={{flexDirection:"column",width:200 ,height:310}} button onPress={()=>{
                            //this.props.navigation.navigate('SingleNews', {title: mapingData.title.rendered, image: mapingData.better_featured_image.source_url, content: mapingData.content.rendered})
                        }}>
                            <Left>
                                <Image
                                    style={{width:200, height: 230, borderRadius: 10}}
                                    source={{uri: item.better_featured_image.source_url}} />
                            </Left>
                            <Body >
                            <Text style={{fontWeight: 'bold', color: '#000',marginTop:60}}>{item.title.rendered}</Text>
                              <View style={{flexDirection:"row"}}>
                              <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/map-marker.png')}style={{width: 20, height: 20,marginTop:10}}   />
                                
                          <Text style={{color: '#999', marginTop: 10}}>{item.acf.address}</Text>
                          </View>
                            </Body>
                        </CardItem>
                    </Card>}
                     />
                );
            
        

    }


}

returnResturants(){
  if(this.state.loaded === 0){
      return(
          <View style={{alignItems: 'center', justifyContent: 'center',marginTop:50}}>
              <Spinner/>
              <Text>Loading</Text>
          </View>
      )
  }else {
      return(
        <FlatList horizontal={true}  
          data={this.state.resArr}
          renderItem={({item}) =>
       

                    <Card key={item.id}>
                        <CardItem style={{flexDirection:"column",width:200,height:310}} button onPress={()=>{
                            //this.props.navigation.navigate('SingleNews', {title: mapingData.title.rendered, image: mapingData.better_featured_image.source_url, content: mapingData.content.rendered})
                        }}>
                            <Left>
                                <Image
                                    style={{width:200, height: 230, borderRadius: 10}}
                                    source={{uri: item.better_featured_image.source_url}} />
                            </Left>
                            <Body >
                            <Text style={{fontWeight: 'bold', color: '#000',marginTop:60}}>{item.title.rendered}</Text>
                              <View style={{flexDirection:"row"}}>
                              <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/map-marker.png')}style={{width: 20, height: 20,marginTop:10}}   />
                                
                          <Text style={{color: '#999', marginTop: 10}}>{item.acf.address}</Text>
                          </View>
                            </Body>
                        </CardItem>
                    </Card>}
                     />
                );
            
        

    }


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
        <FlatList horizontal={true}  
        data={this.state.doArray}
        renderItem={({item}) =>
     

                  <Card key={item.id}>
                      <CardItem style={{flexDirection:"column",width:200,height:310}} button onPress={()=>{
                          //this.props.navigation.navigate('SingleNews', {title: mapingData.title.rendered, image: mapingData.better_featured_image.source_url, content: mapingData.content.rendered})
                      }}>
                          <Left>
                              <Image
                                  style={{width:200, height: 230, borderRadius: 10}}
                                  source={{uri: item.better_featured_image.source_url}} />
                          </Left>
                          <Body >
                          <Text style={{fontWeight: 'bold', color: '#000',marginTop:60}}>{item.title.rendered}</Text>
                            <View style={{flexDirection:"row"}}>
                            <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/map-marker.png')}style={{width: 20, height: 20,marginTop:10}}   />
                              
                        <Text style={{color: '#999', marginTop: 10}}>{item.acf.address}</Text>
                        </View>
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
