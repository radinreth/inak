import React from 'react'
import 
  { 
    Root, Container, Header,  Left, Button, Icon, 
    Body, Title, Right, Content, Text, Footer, FooterTab,
  } from 'native-base'

class DebtorScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { navigation } = this.props

    return (
      <Root>
        <Container>
          <Header>
            <Left>
              <Button transparent 
                      onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>New debtor</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <Text>Htest</Text>
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

export default DebtorScreen