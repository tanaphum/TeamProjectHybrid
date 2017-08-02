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



export default class CompostableComponentTH extends Component {

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
        <View style={styles.appTitle}>
          <Text style={{fontSize: 30}}>Check Rubbish</Text>
          </View>
           <View style = {styles.ViewRow}>
              <View style = {styles.BackBox} >
                <Text style={{fontSize : 30}} onPress={() => this.props.changeComponent('TwoTH') }>🔙</Text>
              </View>

              <View style = {styles.GeneralBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('GeneralComponentTH')}>
                <View><Text>ทั่วไป</Text><Text>{this.state.dataSource.general}</Text></View></TouchableHighlight>
                
              </View>

              <View style = {styles.RecycleBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('RecycleComponentTH')}>
                <View><Text>รีไซเคิล</Text><Text>{this.state.dataSource.recycle}</Text></View></TouchableHighlight>
                
              </View>

              <View style = {styles.ComposeBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('CompostableComponentTH')}>
                <View><Text style={{fontSize : 12}}>ย่อยสลาย</Text><Text>{this.state.dataSource.compostable}</Text></View></TouchableHighlight>
              </View>

              <View style = {styles.HazardBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('HazardComponentTH')}>
                <View><Text>อันตราย</Text><Text>{this.state.dataSource.hazardous}</Text></View></TouchableHighlight>
              </View>

                   <TouchableHighlight onPress={() => this.props.changeComponent('CompostableComponent') } 
            style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>EN</Text></TouchableHighlight>
           </View>
      
       
       <View>
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ย่อยสลายได้  <Image            
                style={{width: 50, height: 50}}
                source={{uri: 'http://www.cherwell.gov.uk/media/image/l/f/00004A96B7AC.C0A801BA.0000211F.0002.jpg'}} 
                /></Text></TouchableHighlight>
          </View>
          <Text style={styles.BinItembox}>- อาหารเสีย</Text>
          <Text style={styles.BinItembox}>- เนื้อสัตว์</Text>
          <Text style={styles.BinItembox}>- เปลือกผัก และ ผลไม้</Text>
        
          
        
      </View>
    )
  }
}

const styles = styles = require('./styles');
