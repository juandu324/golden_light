import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, Card, CardItem } from 'native-base';

import {Image} from 'react-native'

import {Actions} from 'react-native-router-flux'

import chapters from '../chapter_content.js'

export default class Chapter1 extends Component {
  render() {
    console.log("cha rendering", this.props.chapter, this.props);
    const chapter = this.props.chapter;
    const max_chapter = chapters.length;
    const next_chapter = chapter + 1;
    const prev_chapter = chapter - 1;
    console.log(max_chapter, next_chapter, prev_chapter)
    return (
      <Container>
        <Header>
          <Left>            
            <Button transparent onPress={Actions.home}>
              <Icon name='home' />
            </Button>
          </Left>
          <Body>
            <Title>Chapter {chapter + 1}</Title>
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
                    {chapters[chapter].title}
                  </Text>
                  
                </Body>
              </Body>
            </CardItem>
            
            <CardItem>
              <Body>
                <Text>
                  {chapters[chapter].content}
                </Text>
                
              </Body>
            </CardItem>
          </Card>        
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={()=>{if(prev_chapter < 0) Actions.home(); else Actions.cha({chapter:prev_chapter}); }} >
              <Icon name="arrow-back"/>
              <Text>Prev Chapter</Text>
            </Button>
            <Button vertical>
              <Icon name="arrow-forward" onPress={()=> {
                  console.log("click", next_chapter);
                  if(next_chapter >= max_chapter) Actions.home(); else Actions.cha({chapter:next_chapter});}}/>
              <Text>Next Chapter</Text>
            </Button>
          </FooterTab>
        </Footer>

        
      </Container>
    );
  }
}
