import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';
import { 
  Container, 
  Content, 
  Header, 
  Left, 
  Right, 
  Icon, 
  List, 
  ListItem, 
  Body, 
  Item, 
  Input,
  Card,
  CardItem } from  'native-base';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const DrawerComponent = (props) => {
  return (
    <Container>
      <Header style={[{ backgroundColor: 'black', height: 90 }, styles.androidHeader]}>
      <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="person" style={{ color: 'white' }} />
        <Text style={{marginLeft: 5, fontSize: 22, color: 'white', fontStyle: 'italic'
         }}>Hello, Kenneth</Text>
      </Left>
      </Header>
      <Content>
        <FlatList
          style={{ borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}
          data={[
            'Jim Cramer', 'Investing', 'Personal Finance', 'Retirement', 
            'Technology', 'Markets', 'How-To', 'Video'
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  )
}

const AppDrawerNavigator = new createDrawerNavigator({
  HomeScreen: { screen: HomeScreen }
}, {
      drawerPosition: 'left',
      contentComponent: DrawerComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader: {
    ...Platform.select({
      andriod: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});
