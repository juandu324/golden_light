import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, Card, CardItem, List, ListItem } from 'native-base';

import {Image} from 'react-native'

import {Actions} from 'react-native-router-flux'

import chapters from '../chapter_content.js'


export default class Menu extends Component {
  
  render() {
    const entries = chapters.map((chapter, i) => {
      return (
        <ListItem key={"chapter_entry_" + i} onPress={() => Actions.cha({chapter:i})}>
          <Body>
            <Text>Chapter {i + 1}</Text>
            <Text note>{chapter.title}</Text>
          </Body>              
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>      
      );
    });
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={Actions.pop}>
              <Icon name='arrow-back' />
            </Button>

          </Left>
          <Body>
            <Title>Menu</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        
        <Content>
          <List>
            {entries}
          </List>
        </Content>

        
      </Container>
    );
  }
}
