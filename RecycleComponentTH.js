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

import ListPage from './ListPage.js';//import English list page



export default class RecycleComponent extends Component {

     constructor(props)
  {
    super(props);
    this.state =
    {
      
      dataSource:0,
      
    }
  }
    //GET api from smartbin
    componentDidMount() {
    return fetch('http://smartbin.devfunction.com/api/?team_id=11&secret=Wc49Am')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.data.bin_statistics,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
    
    render() {
    return (
        <View style={{backgroundColor: '#ccc', flex:1}}>
        <View style={{alignItems: 'center', backgroundColor: '#ffccee'}}>
          <Text style={{fontSize: 30}}>Check Rubbish</Text>
          </View>
           <View style = {styles.ViewRow}>
              <View style = {styles.BackBox} >
                <Text style={{fontSize : 30}} onPress={() => this.props.changeComponent('TwoTH') }>🔙</Text>
              </View>
              <View style = {styles.GeneralBinBox}>
                <Text>ทั่วไป</Text>
                <Text>{this.state.dataSource.general}</Text>
              </View>
              <View style = {styles.RecycleBinBox}>
                <Text>รีไซเคิล</Text>
                <Text>{this.state.dataSource.recycle}</Text>
              </View>
              <View style = {styles.ComposeBinBox}>
                <Text  >ย่อยสลาย</Text>
                <Text>{this.state.dataSource.compostable}</Text>
              </View>
              <View style = {styles.HazardBinBox}>
                <Text >อันตราย</Text>
                <Text>{this.state.dataSource.hazardous}</Text>
              </View>
                   <TouchableHighlight onPress={() => this.props.changeComponent('RecycleCOmponent') } 
            style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>TH</Text></TouchableHighlight>
           </View>
      
       
        
          <View>
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'#99ffff'}}>General</Text></TouchableHighlight>
          </View>

          <Text style={styles.button}>ขวดน้ำพลาสติกเปล่า            ถุงพลาสติก</Text>
          <Text style={styles.button}>ขวดแก้วเปล่า            เศษแก้ว </Text>
          <Text style={styles.button}>เหล็ก            กระป๋งอเปล่า </Text>
          <Text style={styles.button}>บรรจุภัณฑ์เปล่า        เศษกระดาษ</Text>
        
          
          






      </View>
    )
  }
}

const styles = styles = require('./styles');
