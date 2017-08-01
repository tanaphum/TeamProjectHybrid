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
    }
  }
   //change Page function
  changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }

  

  renderComponent(component) {
        //English start page
        if(component == 'One') {
        return <StartPage nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      } 
        //English list page
        else if(component == 'Two') {
        return <ListPage nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      } 
        //English description page
        else if(component == 'Three') {
        return <DescriptionPage changeComponent={this.changeComponent} />
      } 

        //Thai start page
        else if(component == 'OneTH'){
        return <StartPageTH nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      }
        //Thai list page
        else if(component == 'TwoTH'){
        return <ListPageTH nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      }
        //Thai description page
        else if(component == 'ThreeTH'){
        return <DescriptionPageTH nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
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
