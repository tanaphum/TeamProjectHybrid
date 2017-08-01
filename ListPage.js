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

export default class ListPage extends Component {

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
  img_bin: 'http://www.falkirk.gov.uk/services/bins-rubbish-recycling/household-waste/what-goes-in-my-bins/images/green-bin.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
    	},
    	 {
   	 
    	name : 'Basketball',
	category: 'general',
  Obj_icon: 'https://png.icons8.com/basketball/color/24',
  img_bin: 'http://www.bin-shop.co.uk/image/cache/data/soho-commercial/untouchable-containers/untouchable-large-square-bin-blue-500x500.jpg',
  StepOfDisposing : 'Should pull off the metal the garbage before trash.'
      },
      {
   	 
    	name : 'bean',
	category: 'compostable',
  Obj_icon: 'https://png.icons8.com/java-bean/color/24',
  img_bin: 'https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/JBRMSH18LB_j_burrows_18l_mesh_bin_black.jpg',
  StepOfDisposing : 'Should dehydate the gabage or returnmove water in gabage  before trash.'
    	},
{
   	 
    	name : 'bread',
	category: 'compostable',
  Obj_icon: 'https://png.icons8.com/bread/office/16',
  img_bin: 'https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/JBRMSH18LB_j_burrows_18l_mesh_bin_black.jpg',
  StepOfDisposing : 'Should dehydate the gabage or remove water in gabage  before trash.'
    	},
	],

      currentObj : 0,
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
          <TouchableHighlight style={styles.button}><Text>B</Text></TouchableHighlight>
          
   
          {this.lapsList(this.state.Bsection)}

          </ScrollView>
      </View>
    )
  }

  lapsList(arr) {

    return arr.map((data) => {
      return (
        <View>

          <TouchableHighlight  
        style={styles.button}><Text>{data.name}                 <Image            
                style={{width: 30, height: 30}}
                source={{uri: data.Obj_icon}} 
                /></Text></TouchableHighlight>
          </View>
      )
    })

}

}
const styles = styles = require('./styles');