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

export default class ComponentTwo extends Component {

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
        name : 'test1',
        },
        {
        id : 2,
        name : 'testw',
        },
      ],
       Asection:[
        {
        
        name : 'anchovy',
        },
        {
        
        name : 'almond',
        }, 
        {
        
        name : 'alfalfa sprouts',
        }, 
        {
        
        name : 'acorn squash',
        },
        , 
        {
        
        name : 'acorn squash',
        },
        , 
        {
        
        name : 'acorn squash',
        },
        , 
        {
        
        name : 'acorn squash',
        },

      ],
      dataSource:0,
      Bsection:[
    	{
   	 
    	name : 'bandage' ,
	category: 'hazard',
	Obj_icon: 'https://png.icons8.com/bandage/office/16',
    	},
    	 {
   	 
    	name : 'Basketball',
	category: 'compostable',
	Obj_icon: 'https://png.icons8.com/basketball/color/24',
    	},{
   	 
    	name : 'bean',
	category: 'compostable',
	Obj_icon: 'https://png.icons8.com/java-bean/color/24',
    	},
{
   	 
    	name : 'bread',
	category: 'compost',
	Obj_icon: 'https://png.icons8.com/bread/office/16',
    	},
	],

      
    }
  }

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
                <Text style={{fontSize : 30}} onPress={() => this.props.changeComponent('One') }>🔙</Text>
              </View>
              <View style = {styles.GeneralBinBox}>
                <Text>General</Text>
                <Text>{this.state.dataSource.general}</Text>
              </View>
              <View style = {styles.RecycleBinBox}>
                <Text>Recycle</Text>
                <Text>{this.state.dataSource.recycle}</Text>
              </View>
              <View style = {styles.ComposeBinBox}>
                <Text  style={styles.textBinCompose}>Compose</Text>
                <Text>{this.state.dataSource.compostable}</Text>
              </View>
              <View style = {styles.HazardBinBox}>
                <Text >Hazard</Text>
                <Text>{this.state.dataSource.hazardous}</Text>
              </View>
                   <TouchableHighlight onPress={() => this.props.changeComponent('TwoTH') } 
        style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>TH</Text></TouchableHighlight>

          </View>
          <ScrollView>
          <TouchableHighlight onPress={() => this.updateStat()} style={styles.button}><Text>B</Text></TouchableHighlight>
          
   
          {this.lapsList(this.state.Bsection)}

          </ScrollView>
      </View>
    )
  }

  lapsList(arr) {

    return arr.map((data) => {
      return (
        <View>

          <TouchableHighlight onPress={() => this.props.changeComponent('Three') } 
        style={styles.button}><Text>{data.name}                 <Image            
                style={{width: 30, height: 30}}
                source={{uri: data.Obj_icon}} 
                /></Text></TouchableHighlight>
          </View>
      )
    })

}

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