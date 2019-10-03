import React from 'react'
import 
  { 
    Root, Container, Header,  Left, Button, Icon, 
    Body, Title, Right, Content, Text, Footer, FooterTab,
    Form, Item, Input, DatePicker, List, ListItem,
  } from 'native-base'

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Warning', 'deprecated'])

class DebtorShowScreen extends React.Component {
  constructor(props) {
    super(props)

    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit = () => {
    let { navigation } = this.props

    navigation.navigate('DebtorCreate')
  }

  render() {
    let { navigation } = this.props
    const MS_IN_DAY = 24 * 60 * 60 * 1000
    let a_week_ago = 7 * MS_IN_DAY

    return (
      <Root>
        <Container>
          <Header>
            <Left>
              <Button transparent 
                      onPress={() => navigation.popToTop()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Show Debtor</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.addDebtor}>
                <Icon name="ios-add-circle" />
              </Button>
            </Right>
          </Header>

          <Content padder>
            <List>
              <ListItem icon>
                <Left>
                  <Button>
                    <Icon name="person" />
                  </Button>
                </Left>
                <Body>
                  <Text>Chenda Khun</Text>
                </Body>
                <Right />
              </ListItem>

              <ListItem icon>
                <Left>
                  <Button>
                    <Icon name="ios-cash" />
                  </Button>
                </Left>
                <Body>
                  <Text>$500.0</Text>
                </Body>
                <Right />
              </ListItem>

              <ListItem icon>
                <Left>
                  <Button>
                    <Icon name="ios-time" />
                  </Button>
                </Left>
                <Body>
                  <Text>2019/10/03</Text>
                </Body>
                <Right />
              </ListItem>
            </List>

            <Button block iconLeft style={{  marginTop: 40 }}
              onPress={this.handleEdit}>
              <Icon name="md-brush" />
              <Text>Edit</Text>
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
}

export default DebtorShowScreen