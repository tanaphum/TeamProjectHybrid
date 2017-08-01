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



export default class GeneralBinComponentTH extends Component {

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

                   <TouchableHighlight onPress={() => this.props.changeComponent('GeneralComponent') } 
            style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>EN</Text></TouchableHighlight>
           </View>
      
       
       <View>
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'#99ffff'}}>ทั่วไป <Image            
                style={{width: 40, height: 40}}
                source={{uri: 'https://thumbs.dreamstime.com/x/sign-bin-general-waste-26140645.jpg'}} 
                /></Text></TouchableHighlight>
          </View>
          <Text style={styles.BinItembox}>- พลาสติกที่ใส่อาหารแล้ว</Text>
          <Text style={styles.BinItembox}>- เสื้อผ้า</Text>
          <Text style={styles.BinItembox}>- หลอดดูด</Text>
          <Text style={styles.BinItembox}>- ถ้วยบะหมี่กึ่งสำเร็จรูป</Text>
          <Text style={styles.BinItembox}>- ห่อลูกอม</Text>
          <Text style={styles.BinItembox}>- ถ้วยกระดาษ</Text>
          <Text style={styles.BinItembox}>- ถุงขนม</Text>
          <Text style={styles.BinItembox}>- กล่องโฟม</Text>
          <Text style={styles.BinItembox}>- ถุงบะหมี่กึ่งสำเร็จรูป</Text>
          <Text style={styles.BinItembox}>- กล่องอาหาร</Text>
          <Text style={styles.BinItembox}>- กระดาษชำระ</Text>
          
        
      </View>
    )
  }
}

const styles = styles = require('./styles');
