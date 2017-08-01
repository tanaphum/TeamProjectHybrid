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
import StartPage from './StartPage.js';//import English start page

import ListPage from './ListPage.js';//import English list page
import ListPageTH from './ListPageTH.js';//import Thai list page
import DescriptionPage from './DescriptionPage.js' ;//import English description page
import DescriptionPageTH from './DescriptionPageTH.js'; //import Thai description page

export default class Teamproject extends Component {
 constructor(props)
  {
    super(props);
    this.state =
    {
      componentSelected: 'One',
      nameapp: 'Check Rubbish',
      currentObj: {
          name : 'null',
          category: 'compost',
          Obj_icon: 'https://png.icons8.com/bread/office/16',
          img_bin: 'https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/JBRMSH18LB_j_burrows_18l_mesh_bin_black.jpg',
          StepOfDisposing : 'null'

    	},
    	IncreasaeGeneral: 0,
      	IncreasaeRecycle:0,
      	IncreasaeCompostable:0,
      	IncreasaeHazard:0,
    }
  }
   //change Page function
  changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }

 goToDescription = (component,data) =>{
     
    this.updateStat(data.category),
     this.setState({
       componentSelected: component,
       currentObj: data,
      });
     
  }


  //POST api from smartbin
updateStat = (category) => {
  if(category == 'general') {
    this.setState({
      IncreasaeGeneral: 1,
      IncreasaeCompostable: 0,
      IncreasaeRecycle: 0,
      IncreasaeHazard: 0
    })
  }else if(category == 'compostable') {
     this.setState({
      IncreasaeGeneral: 0,
      IncreasaeCompostable: 1,
      IncreasaeRecycle: 0,
      IncreasaeHazard: 0
    })
  }else if(category == 'recycle') {
     this.setState({
      IncreasaeGeneral: 0,
      IncreasaeCompostable: 0,
      IncreasaeRecycle: 1,
      IncreasaeHazard: 0
    })
  }else if(category == 'hazard') {
     this.setState({
      IncreasaeGeneral: 0,  
      IncreasaeCompostable: 0,
      IncreasaeRecycle: 0,
      IncreasaeHazard: 1
    })
  }
  fetch('http://smartbin.devfunction.com/api/', {
  method: 'post',
  body: JSON.stringify({
    team_id: 11,
    secret: 'Wc49Am',

    bin_statistics: {
      general: this.state.IncreasaeGeneral,
      compostable: this.state.IncreasaeCompostable,
      recycle: this.state.IncreasaeRecycle,
      hazardous: this.state.IncreasaeHazard,
    }
  })
});
}
  renderComponent(component) {
        //English start page
        if(component == 'One') {
        return <StartPage nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      } 
        //English list page
        else if(component == 'Two') {
        return <ListPage changeComponent={this.changeComponent} goToDescription={this.goToDescription}/>
      } 
        //English description page
        else if(component == 'Three') {
        return <DescriptionPage changeComponent={this.changeComponent} currentObj={this.state.currentObj}/>
      } 

       
       
        //Thai list page
        else if(component == 'TwoTH'){
        return <ListPageTH changeComponent={this.changeComponent} goToDescription={this.goToDescription}/>
      }
        //Thai description page
        else if(component == 'ThreeTH'){
        return <DescriptionPageTH changeComponent={this.changeComponent} currentObj={this.state.currentObj}/>
      }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
}


const styles = styles = require('./styles');