import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, TextInput } from 'react-native';

import { Container, Header, Left, Body, Right, Button, Form, Item, Text, Content, Card, CardItem, Spinner } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MyHeader from './MyHeader'
type Props = {};

export default class About extends Component<Props> {
  state = { name: "Esraa", comment: "", addCommentRes: {}, addingComment: 0, data: [], loadedcomment: 0 }



  componentDidMount = () => {

    fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?post=' + this.props.id)
      .then((response) => response.json())
      .then((resJson) => {
        this.setState({
          data: resJson, loadedcomment: 1
        }, function f() {
          console.log("data:", resJson);
        });
      })
      .catch((error) => {
        console.error(error + "fetch error");

      });
  }

  render() {
    return (
      <Container>
<View style={{ width: '100%', height: 250 }} >
        <Image style={{ width: '100%', height: 250 }} source={{ uri: this.props.image }} />
        </View>


        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{this.props.title}</Text>
                <Text style={{ color: 'gray' }}>{this.props.content}</Text>
              </Body>
            </CardItem>
          </Card>
          <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 20 }}>More Information</Text>
          <Card>
            <CardItem>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/address.png')} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: 'gray', fontSize: 15, marginLeft: 10 }}>{this.props.address}</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/call.png')} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: 'gray', fontSize: 15, marginLeft: 10 }}>{this.props.phone}</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/mail.png')} style={{ width: 18, height: 18 }} />
                  <Text style={{ color: 'gray', fontSize: 15, marginLeft: 10 }}>{this.props.email}</Text>
                </View>
              </View>
            </CardItem>
          </Card>

          <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 20 }}>Leave Comment</Text>
          <Card>
            {this.returnComment()}

            <CardItem>
                            <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 5, borderColor: 'lightgray', alignItems: 'center', width: '100%', height:'100%' }}>
                                <TextInput style={{ height: 40, width: '75%', borderColor: 'transparent', padding: 10, marginRight: 40 , fontSize: 15 }}  onChangeText={(comment) => this.setState({ comment })}
                      value={this.state.comment} placeholder="Write here......"></TextInput>
                   


                                <Button transparent onPress={() => {
                                         {this.addComment()}
                                    }}>
                                    <Image source={require('./Khrogaty-Cuts/Khrogaty-Cuts/Icons/telegram.png')} style={{ width: '30%', height: '80%' }} />
                                </Button>
                            </View>
                        </CardItem>
          </Card>



          
        </Content>
      </Container>
    );
  }

 

  addComment() {
    fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?author_name=' + this.state.name + '&author_email=saragalal93@gmail.com&content=' + this.state.comment + '&post=' + this.props.id,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((rj) => {
        this.setState({ addCommentRes: rj, addingComment: 0, name: "", comment: "" }, function f() {

          console.log(rj);
        });
      })
      .catch((error) => {
        console.error(error + "fetch error");

      });
  }

  returnComment() {
    if (this.state.loadedcomment === 0) {
      return (
        <View>
          <Spinner />
        </View>
      )
    } else {
      console.log(this.state.data, "liajsfusdyf");
      return (
        this.state.data.map((mapingComment) => {

          return (

            <CardItem>

              <Body style={{ flex: 3 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{mapingComment.author_name}</Text>
                <Text style={{ fontSize: 14 }}>{mapingComment.content.rendered}</Text>

              </Body>

            </CardItem>


          )
        })
      )
    }
  }

}






