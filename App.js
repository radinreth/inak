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
    ListItem,
    List,
    Body,
    Title,
    Right,
    Content,
    Text,
    Footer,
    FooterTab,
  }
  from 'native-base'

import { Alert } from 'react-native'

class App extends React.Component  {

  constructor(props) {
    super(props)

    this.state = {
      debtors: [
        {
          id: 1, name: 'sitha'
        },
        {
          id: 2, name: 'chenda'
        },
        {
          id: 3, name: 'vorleak'
        }
      ]
    }
  }

  addDebtor = () => {
    this.setState((prev) => {
      return {
        debtors: [...prev.debtors, { id: (prev.debtors.length+1), name: 'john' }]
      }
    })
  }
  
  render() {
    return (
      <Root>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>All debtors</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.addDebtor.bind(this)}>
                <Icon name="ios-add-circle" />
              </Button>
            </Right>
          </Header>

          <Content padder>
            <List>
              {
                this.state.debtors.map( d => {
                  return <ListItem key={String(d.id)}>
                    <Text>{d.name}</Text>
                  </ListItem>
                })
              }
            </List>
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
}

export default App;
