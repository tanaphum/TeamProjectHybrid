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
import StartPageTH from './StartPageTH.js';//import Thai start page
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
    }
  }
   //change Page function
  changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }

  goToDescription = (component,data) =>{
     this.setState({
       componentSelected: component,
       currentObj: data,
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

        //Thai start page
        else if(component == 'OneTH'){
        return <StartPageTH nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
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
