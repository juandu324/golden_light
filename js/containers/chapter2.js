import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, Card, CardItem } from 'native-base';

import {Image} from 'react-native'

import {Actions} from 'react-native-router-flux'


export default class Chapter1 extends Component {
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
            <Title>Chapter 2</Title>
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
                  <Text style={{fontSize: 20,  textAlign: 'center'}}>

                    
                  </Text>
              
               </Body>
              </Body>
            </CardItem>
            
            <CardItem>
              <Body>
                <Text>
{`
`}
                </Text>
                
              </Body>
            </CardItem>
          </Card>        
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={Actions.home} >
              <Icon name="arrow-back"/>
              <Text>Prev Chapter</Text>
            </Button>
            <Button vertical>
              <Icon name="arrow-forward" onPress={Actions.ch2}/>
              <Text>Next Chapter</Text>
            </Button>
          </FooterTab>
        </Footer>

        
      </Container>
    );
  }
}
