import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, Card, CardItem } from 'native-base';

import {Image} from 'react-native'

import {Actions} from 'react-native-router-flux'


export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={Actions.home}>
              <Icon name='home' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>            
          </Body>
          <Right>
            <Button transparent onPress={Actions.menu}>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        
        <Content>
          
          <Card style={{flex: 0}}>
            <CardItem >
              <Body>
                <Body>
                  <Text>The King of Glorious Sutras called the</Text>
                  <Text style={{fontSize: 20, textAlign: 'center'}}>Exalted Sublime Golden Light</Text>
                  <Text>A Mahayana Sutra</Text>
                </Body>
              </Body>
            </CardItem>
            
            <CardItem>
              <Body>
                <Body>
                  <Image source={require('../../images/golden_light.png')} resizeMode='cover'/>
                  <Text style={{marginTop: 50}}>21 Chapter Version</Text>
                </Body>
              </Body>
            </CardItem>
          </Card>        
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() =>Actions.cha({chapter:20})}>
              <Icon name="arrow-back"/>
              <Text>Prev Chapter</Text>
            </Button>
            <Button vertical onPress={() =>Actions.cha({chapter:0})}>
              <Icon name="arrow-forward"/>
              <Text>Next Chapter</Text>
            </Button>
          </FooterTab>
        </Footer>
     
      </Container>
    );
  }
}
