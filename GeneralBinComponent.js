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



export default class GeneralBinComponent extends Component {

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
                   <TouchableHighlight onPress={() => this.props.changeComponent('GeneralComponentTH') } 
            style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>TH</Text></TouchableHighlight>
           </View>
      
       
        
          <View>
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'#99ffff'}}>General <Image            
                style={{width: 40, height: 40}}
                source={{uri: 'https://thumbs.dreamstime.com/x/sign-bin-general-waste-26140645.jpg'}} 
                /></Text></TouchableHighlight>
          </View>
          <Text style={styles.BinItembox}>- used plastic container</Text>
          <Text style={styles.BinItembox}>- cloth</Text>
          <Text style={styles.BinItembox}>- straw</Text>
          <Text style={styles.BinItembox}>- instant noodle cup</Text>
          <Text style={styles.BinItembox}>- candy bag </Text>
          <Text style={styles.BinItembox}>- paper cup</Text>
          <Text style={styles.BinItembox}>- snack bag</Text>
          <Text style={styles.BinItembox}>- foam box</Text>
          <Text style={styles.BinItembox}>- instant noodle bag </Text>
          <Text style={styles.BinItembox}>- food box</Text>
          <Text style={styles.BinItembox}>- tissue paper</Text>





      </View>
    )
  }
}

const styles = styles = require('./styles');
