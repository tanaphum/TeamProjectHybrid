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
     
                    name : 'ไก่' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/chicken/office/16',
                img_bin: 'http://www.falkirk.gov.uk/services/bins-rubbish-recycling/household-waste/what-goes-in-my-bins/images/green-bin.jpg',
                StepOfDisposing : 'ไก่ ไก่ ไก่'
                    },
                    {
                  
                    name : 'กระดาษ',
                category: 'general',
                Obj_icon: 'https://png.icons8.com/paper/color/24',
                img_bin: 'http://www.bin-shop.co.uk/image/cache/data/soho-commercial/untouchable-containers/untouchable-large-square-bin-blue-500x500.jpg',
                StepOfDisposing : 'Should pull off the metal the garbage before trash.'
                    },
                    {
                  
                    name : 'แก้ว',
                category: 'compostable',
                Obj_icon: 'https://png.icons8.com/glass/color/24',
                img_bin: 'https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/JBRMSH18LB_j_burrows_18l_mesh_bin_black.jpg',
                StepOfDisposing : 'Should dehydate the gabage or remove water in gabage  before trash.'
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
        <View style={{alignItems: 'center', backgroundColor: '#ffccee'}}>
          <Text style={{fontSize: 30}}>Check Rubbish</Text>
          </View>
           <View style = {styles.ViewRow}>
              <View style = {styles.BackBox} >
                
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
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'#99ffff'}}>ก</Text></TouchableHighlight>
          
          
           {this.lapsList(this.state.array)}

          </ScrollView>
      </View>
    )
  }

  lapsList(arr) {

    return arr.map((data) => {
      return (
        <View>

          <TouchableHighlight onPress={() => this.props.goToDescription('ThreeTH',data) } 
        style={styles.button}><Text>{data.name}</Text></TouchableHighlight>
          </View>
      )
    })

}
}

const styles = styles = require('./styles');