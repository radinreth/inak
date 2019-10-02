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

class App extends React.Component  {
  
  render() {
    const data = {
      name: 'sambo',
      debtors: [
        {
          id: 1,
          name: 'sitha'
        },
        {
          id: 2,
          name: 'chenda'
        },
        {
          id: 3,
          name: 'vorleak'
        }
      ]
    }

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
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>

          <Content padder>
            <List>
              {
                data.debtors.map( d => {
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
