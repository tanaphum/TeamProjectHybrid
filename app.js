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
import ComponentOne from './ComponentOne.js'
import ComponentOneTH from './ComponentOneTH.js'
import ComponentTwo from './ComponentTwo.js'
import ComponentTwoTH from './ComponentTwoTH.js'
import ComponentThree from './ComponentThree.js'
import ComponentThreeTH from './ComponentThreeTH.js'

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

  changeComponent = (component) =>{
    this.setState({componentSelected: component});
  }

  

  renderComponent(component) {
        if(component == 'Zero') {
      }
        if(component == 'One') {
        return <ComponentOne nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      } else if(component == 'Two') {
        return <ComponentTwo nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      } else if(component == 'Three') {
        return <ComponentThree changeComponent={this.changeComponent} />
      } 

      else if(component == 'OneTH'){
        return <ComponentOneTH nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      }else if(component == 'TwoTH'){
        return <ComponentTwoTH nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
      }else if(component == 'ThreeTH'){
        return <ComponentThreeTH nameapp={this.state.nameapp} changeComponent={this.changeComponent} />
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
