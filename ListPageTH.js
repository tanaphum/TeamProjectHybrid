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

export default class ComponentTwoTH extends Component {

constructor(props)
  {
    super(props);
    this.state =
    {
      componentSelected: 'One',
      Language : 'En',
      Typeofbin: 'Compose',
      NameRubbish : 'apple' ,
      IconRubbish: 'https://png.icons8.com/apple/color/24',
      StepOfDisposing : 'Step Of Disposing',
      array:[
        {
        id : 1,
        name : 'ทดลอง',
        },
        {
        id : 2,
        name : 'ทดลอง2',
        },
      ],
       Asection:[
        {
        
        name : 'ไก่',
        },
        {
        
        name : 'กา',
        }, 
        {
        
        name : 'ไก่กา',
        }, 
        {
        
        name : 'เกม',
        },
        , 
        {
        
        name : 'กระดาษ',
        },
        , 
        {
        
        name : 'กระจก',
        },
        , 
        {
        
        name : 'กระดิ่ง',
        },

      ],
      
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
        
           <View style = {styles.ViewRow}>
              <View style = {styles.BackBox} >
                <Text style={{fontSize : 30}} onPress={() => this.props.changeComponent('OneTH') }>🔙</Text>
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
                <Text  style={styles.textBinCompose}>ย่อยสลาย</Text>
                <Text>{this.state.dataSource.compostable}</Text>
              </View>
              <View style = {styles.HazardBinBox}>
                <Text >อันตราย</Text>
                <Text>{this.state.dataSource.hazardous}</Text>
              </View>
                   <TouchableHighlight onPress={() => this.props.changeComponent('Two') } 
        style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>EN</Text></TouchableHighlight>

          </View>
          <ScrollView>
          <TouchableHighlight onPress={() => this.updateStat()} style={styles.button}><Text>ก</Text></TouchableHighlight>
          
          
           {this.lapsList(this.state.array)}
          {this.lapsList(this.state.Asection)}

          </ScrollView>
      </View>
    )
  }

  lapsList(arr) {

    return arr.map((data) => {
      return (
        <View>

          <TouchableHighlight onPress={() => this.props.changeComponent('ThreeTH') } 
        style={styles.button}><Text>{data.name}</Text></TouchableHighlight>
          </View>
      )
    })

}
//POST api from smartbin
updateStat = () => {
  fetch('http://smartbin.devfunction.com/api/', {
  method: 'post',
  body: JSON.stringify({
    team_id: 11,
    secret: 'Wc49Am',

    bin_statistics: {
      general: 1,
      compostable: 1,
      recycle: 1,
      hazardous: 1
    }
  })
});
}
}

const styles = styles = require('./styles');