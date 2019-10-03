import React from 'react'
import 
  { 
    Root, Container, Header,  Left, Button, Icon, 
    Body, Title, Right, Content, Text, Footer, FooterTab,
    Form, Item, Input, DatePicker
  } from 'native-base'

import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Warning', 'deprecated'])

class DebtorScreen extends React.Component {
  constructor(props) {
    super(props)
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
                      onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>New Debtor</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <Form>
              <Item>
                <Input placeholder="name" />
              </Item>
              <Item>
                <Input placeholder="money" />
              </Item>
              <Item>
                <DatePicker 
                  minimumDate={new Date(Date.now() - a_week_ago)}
                  maximumDate={new Date(Date.now())}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"slide"}
                  placeHolderText="Select date"
                  placeHolderTextStyle={{ color: "#666" }}

                />
              </Item>

              <Button block iconLeft style={{  marginTop: 40 }}>
                <Icon name="ios-add-circle" />
                <Text>Save</Text>
              </Button>
            </Form>
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