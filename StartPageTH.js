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

export default class StartPageTH extends Component {
   constructor(props)
  {
    super(props);
  }
    render() {
    return (
        <View style={{backgroundColor: '#ccc', flex:1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{fontSize : 40, marginBottom:100}}>เช็คขยะ</Text>
        <Button
           onPress={() => this.props.changeComponent('TwoTH')}
           title="เริ่ม"
           color="#841584"
        />
      </View>
    )
  }
}

const styles = styles = require('./styles');