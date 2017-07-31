import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image,
  ScrollView
} from 'react-native';
import { Select, Option } from 'react-native-select-list';

export default class ComponentOne extends Component {
   constructor(props)
  {
    super(props);
  }
    render() {
    return (
        <View style={{backgroundColor: '#ccc', flex:1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{fontSize : 40, marginBottom:100}}>Check Rubbish</Text>
        <Button
           onPress={() => this.props.changeComponent('Two')}
           title="Start"
           color="#841584"
        />
      </View>
    )
  }
}

const styles = styles = require('./styles');