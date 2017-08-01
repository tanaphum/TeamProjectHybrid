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
                <Text style={{fontSize : 30}} onPress={() => this.props.changeComponent('Two') }>🔙</Text>
              </View>

              <View style = {styles.GeneralBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('GeneralComponent')}>
                <View><Text>General</Text><Text>{this.state.dataSource.general}</Text></View></TouchableHighlight>
              </View>

              <View style = {styles.RecycleBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('RecycleComponent')}>
                <View><Text>Recycle</Text><Text>{this.state.dataSource.recycle}</Text></View></TouchableHighlight>
              </View>

              <View style = {styles.ComposeBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('CompostableComponent')}>
                <View><Text style={{fontSize : 12}}>Compost</Text><Text>{this.state.dataSource.compostable}</Text></View></TouchableHighlight>
              </View>

              <View style = {styles.HazardBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('HazardComponent')}>
                <View><Text>Hazard</Text><Text>{this.state.dataSource.hazardous}</Text></View></TouchableHighlight>
              </View>

                   <TouchableHighlight onPress={() => this.props.changeComponent('RecycleComponentTH') } 
            style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>TH</Text></TouchableHighlight>
           </View>
      
       
        
          <View>
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'#99ffff'}}>Recycle <Image            
                style={{width: 40, height: 40}}
                source={{uri: 'https://image.shutterstock.com/z/stock-vector-yellow-recycle-symbol-in-black-circle-40226371.jpg'}} 
                /></Text></TouchableHighlight>
          </View>

          <Text style={styles.BinItembox}>- empty plastic bottle</Text>
          <Text style={styles.BinItembox}>- plastic bag</Text>
          <Text style={styles.BinItembox}>- empty glass</Text>
          <Text style={styles.BinItembox}>- broken glass</Text>
          <Text style={styles.BinItembox}>- metal</Text>
          <Text style={styles.BinItembox}>- empty can</Text>
          <Text style={styles.BinItembox}>- empty berverage container</Text>
          <Text style={styles.BinItembox}>- piece of paper</Text>
          
          






      </View>
    )
  }
}

const styles = styles = require('./styles');
