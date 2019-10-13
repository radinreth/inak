import React from 'react'
import 
  { 
    Root, Container, Header, Left, Button, Icon, ListItem, 
    List, Body, Title, Right, Content, Text, Footer, FooterTab,
  } from 'native-base'

class HomeScreen extends React.Component {
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

    this.addDebtor = this.addDebtor.bind(this)
  }

  addDebtor = () => {
    let { navigation } = this.props
    navigation.navigate('DebtorCreate')
  }
  
  render() {
    return (
      <Root>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>All debtors</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.addDebtor}>
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

export default HomeScreen