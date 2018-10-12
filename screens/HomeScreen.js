import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Platform, StatusBar } from 'react-native'
import { Container, Content, Header, Left, Right, Icon, Card, CardItem } from  'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import News from '../components/News';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
          <Header style={[{ backgroundColor: 'black',
          height: 90, borderBottomColor: '#757575' }, styles.androidHeader]}>
            <Left style={{ flexDirection: 'row' }}>
                <Icon onPress={() => this.props.navigation.openDrawer ('DrawerOpen')}
                 name="md-menu" style={{ color: 'white', marginRight: 15 }} />
                <Image source={require('../assets/logo32.jpg')} />
            </Left>
            <Right style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 14, color: 'white' }}>LOG IN</Text>
                <FAIcon name="caret-down" style={{ fontSize: 20, color: 'white',
                marginLeft: 10 }} />
            </Right>
          </Header>
          <View style={{ position: 'absolute', left: 0,
            right: 0, top: 90, height: 70, backgroundColor: 'black', flexDirection:
            'row', alignItems: 'center', paddingHorizontal: 5 }}>
            <View style={{ width: 100, backgroundColor: 'white', height:
                50, borderRadius: 4, padding: 4, flexDirection:
                'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 14 }}>DJIA</Text>
                <FAIcon name="caret-down" style={{ fontSize: 20, color: 'red' }} />
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red'}}>545.91</Text>
            </View>
            <View style={{ width: 100, backgroundColor: 'white', height:
                50, borderRadius: 4, padding: 2, flexDirection:
                'row', alignItems: 'center', marginLeft: 5 }}>
                <Text style={{ fontSize: 12 }}>NASDAQ</Text>
                <FAIcon name="caret-down" style={{ fontSize: 20, color: 'red' }} />
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'red'}}>92.99</Text>
            </View>
            <View style={{ width: 100, backgroundColor: 'white', height:
                50, borderRadius: 4, padding: 1, flexDirection:
                'row', alignItems: 'center', marginLeft: 5 }}>
                <Text style={{ fontSize: 13 }}>S&amp;P 500</Text>
                <FAIcon name="caret-down" style={{ fontSize: 20, color: 'red' }} />
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'red'}}>57.31</Text>
            </View>
          </View>
          <Content style={{ backgroundColor: 'white', marginTop: 70 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', 
            paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center'}}>                     
                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>BREAKING NEWS</Text>
            </View>
            <View style={{ borderBottomColor: 'white', borderBottomWidth: 1 }} />
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', 
            paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center'}}>                     
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Dow Ends Off More Than 500, Two-Day Loss Tops 1,300</Text>
            </View>
            <Swiper style={{ height: 216 }} autoplay={true}>
               <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                        source={require('../assets/trump.jpg')} />
               </View> 
               <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                        source={require('../assets/floor.jpg')} />
               </View>
               <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                        source={require('../assets/floor3.jpg')} />
               </View>
               <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                        source={require('../assets/floor2.jpg')} />
                    />
               </View>
            </Swiper>
            <Card>
                <CardItem header>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>News of the Day</Text>
                    </View>
                </CardItem>
            </Card>
            <Card>
                <News
                    Name="Trump Jawboning Unlikely to Stop Federal Reserve"
                    Writer="Written By TheStreet"
                    Date="Oct 11, 2018 5PM EST"
                    imageUri={require("../assets/trump.jpg")} />
                />
            </Card>
            <Card>
                <News
                    Name="Dow Ends Off More Than 500, Two-Day Loss Tops 1,375"
                    Writer="Written By TheStreet"
                    Date="Oct 11, 2018 5PM EST"
                    imageUri={require("../assets/floor.jpg")} />
                />
            </Card>
            <Card>
                <News
                    Name="Randolph &amp; Mortimer Duke have a HEARTBRAKING Day!"
                    Writer="Written By TheStreet"
                    Date="Oct 11, 2018 5PM EST"
                    imageUri={require("../assets/floor3.jpg")} />
                />
            </Card>
            <Card>
                <News
                    Name="Billy Ray Valentine &amp; Louis Winthorp III hit it big!"
                    Writer="Written By TheStreet"
                    Date="Oct 11, 2018 5PM EST"
                    imageUri={require("../assets/floor2.jpg")} />
                />
            </Card>
          </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
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

