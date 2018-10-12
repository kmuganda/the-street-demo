import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Card, CardItem, Right } from 'native-base';

export default class News extends Component {
  render() {
    return (
      <CardItem>
          <View>
              <Image style={{ height: 90, width: 90 }}
              source={this.props.imageUri} />
          </View>
          <Right style={{ flex: 1, alignItems: 'flex-start', height: 90,
              paddingHorizontal: 20 }}>
              <Text style={{ fontWeight: 'bold'}}>{this.props.Name}</Text>
              <Text style={{ color: 'grey' }}>{this.props.Writer}</Text>
              <Text style={{ fontSize: 12, color: 'red' }}>{this.props.Date}</Text>
          </Right>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})
