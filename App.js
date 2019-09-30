/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import 
  { 
    Container,
    Header, 
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right,
    Content,
    Text,
    Footer,
    FooterTab
  }
  from 'native-base'

const App = () =>  {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Text>Hello World</Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default App;
