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

export default class DescriptionPageTH extends Component {

     constructor(props)
  {
    super(props);
    this.state =
    {
      componentSelected: 'One',
      Language : 'En',
      Typeofbin: 'ย่อยสลาย',
      imagebin: 'https://i.ebayimg.com/00/s/MTAyNFg2MTQ=/z/wPEAAOSw5cRZGg3M/$_86.JPG',
      StepOfDisposing : 'ขั้นตอน',
      IconRubbish: 'https://png.icons8.com/apple/color/24',
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
                <TouchableHighlight  onPress={() => this.props.changeComponent('GeneralComponent')}>
                <Text >ทั่วไป {this.state.dataSource.general}</Text></TouchableHighlight>
                
              </View>

              <View style = {styles.RecycleBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('RecycleComponent')}>
                <Text >รีไซเคิล {this.state.dataSource.recycle}</Text></TouchableHighlight>
                
              </View>

              <View style = {styles.ComposeBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('CompostableComponent')}>
                <Text >ย่อยสลาย {this.state.dataSource.compostable}</Text></TouchableHighlight>
                
              </View>

              <View style = {styles.HazardBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('HazardComponent')}>
                <Text >อันตราย {this.state.dataSource.hazardous}</Text></TouchableHighlight>
                
              </View>
                   <TouchableHighlight onPress={() => this.props.changeComponent('Two') } 
            style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>EN</Text></TouchableHighlight>

          </View>
        <TouchableHighlight style={styles.button}>
            <View style={styles.ViewRow}>
                <Text style={{marginRight : 100}}>
                  {this.props.currentObj.name}
                </Text>
                <Image            
                style={{width: 30, height: 30}}
                source={{uri: this.props.currentObj.Obj_icon}} 
                />
                
            </View>
        </TouchableHighlight>
        {/*Show Type of bin  image and StepOfDisposing */}
        <View style={{backgroundColor: '#444444', flex:1,alignItems: 'center',paddingTop : 20}}>
          <Image           
          style={{width: 100, height: 100,marginBottom : 30}}
          source={{uri: this.props.currentObj.img_bin}} 
          />
          <Text>ขั้้นตอนการ</Text>
          <Text>{this.props.currentObj.StepOfDisposing}</Text>
        </View>
      </View>
    )
  }
}

const styles = styles = require('./styles');