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
    Root,
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
    FooterTab,
    ActionSheet
  }
  from 'native-base'

let BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
let DESTRUCTIVE_INDEX = 3;
let CANCEL_INDEX = 4;

const App = () =>  {
  return (
    <Root>
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
          <Button onPress={() => 
            ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Testing ActionSheet"
                },
                buttonIndex => {
                  console.log(buttonIndex)
                }
              )
          }>
            <Text>Actions</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </Root>
  )
}

export default App;
