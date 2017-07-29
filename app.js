import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image
} from 'react-native';
import { Select, Option } from 'react-native-select-list';

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
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
}

class ComponentOne extends Component {
   constructor(props)
  {
    super(props);
  }
    render() {
    return (
        <View style={{backgroundColor: '#ccc', flex:1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{fontSize : 40, marginBottom:100}}>{this.props.nameapp}</Text>
        <Button
           onPress={() => this.props.changeComponent('Two')}
           title="Start"
           color="#841584"
        />
      </View>
    )
  }
}

class ComponentTwo extends Component {

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
      ]
      
    }
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
                <Text>0</Text>
              </View>
              <View style = {styles.RecycleBinBox}>
                <Text>Recycle</Text>
                <Text>0</Text>
              </View>
              <View style = {styles.ComposeBinBox}>
                <Text  style={styles.textBinCompose}>Compose</Text>
                <Text>0</Text>
              </View>
              <View style = {styles.HazardBinBox}>
                <Text >Hazard</Text>
                <Text>0</Text>
              </View>
              <View style = {styles.LanguageChangeBox}>
                <Text style={styles.textLanguageChange}>TH</Text>
              </View>
           </View>
          <TouchableHighlight style={styles.button}><Text>A</Text></TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.changeComponent('Three') } style={styles.button}>
            <View style={styles.ViewRow}>
                <Text style={{marginRight : 100}}>Apple 
                </Text>
                <Image            
                style={{width: 30, height: 30}}
                source={{uri: this.state.IconRubbish}} 
                />
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.changeComponent('Three') } style={styles.button}>
            <View style={styles.ViewRow}>
                <Text style={{marginRight : 100}}>Apple  {this.state.array[0].id}
                </Text>
                <Image            
                style={{width: 30, height: 30}}
                source={{uri: this.state.IconRubbish}} 
                />
          </View>
          </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.changeComponent('Three') } style={styles.button}>
            <View style={styles.ViewRow}>
                <Text style={{marginRight : 100}}>Apple {this.state.array[1].name} 
                </Text>
                <Image            
                style={{width: 30, height: 30}}
                source={{uri: this.state.IconRubbish}} 
                />
          </View>
          </TouchableHighlight>
      </View>
    )
  }
}


class ComponentThree extends Component {

     constructor(props)
  {
    super(props);
    this.state =
    {
      componentSelected: 'One',
      Language : 'En',
      Typeofbin: 'Compose',
      imagebin: 'https://i.ebayimg.com/00/s/MTAyNFg2MTQ=/z/wPEAAOSw5cRZGg3M/$_86.JPG',
      StepOfDisposing : 'Step Of Disposing',
      IconRubbish: 'https://png.icons8.com/apple/color/24',
    }
  }
    
    render() {
    return (
        <View style={{backgroundColor: '#ccc', flex:1}}>
           <View style = {styles.ViewRow}>
              <View style = {styles.BackBox} >
                <Text style={{fontSize : 30}} onPress={() => this.props.changeComponent('Two') }>🔙</Text>
              </View>
              <View style = {styles.GeneralBinBox}>
                <Text>General</Text>
                <Text>0</Text>
              </View>
              <View style = {styles.RecycleBinBox}>
                <Text>Recycle</Text>
                <Text>0</Text>
              </View>
              <View style = {styles.ComposeBinBox}>
                <Text  style={styles.textBinCompose}>Compose</Text>
                <Text>0</Text>
              </View>
              <View style = {styles.HazardBinBox}>
                <Text >Hazard</Text>
                <Text>0</Text>
              </View>
              <View style = {styles.LanguageChangeBox}>
                <Text style={styles.textLanguageChange}>TH</Text>
              </View>
           </View>
        <TouchableHighlight style={styles.button}>
            <View style={styles.ViewRow}>
                <Text style={{marginRight : 100}}>Apple 
                </Text>
                <Image            
                style={{width: 30, height: 30}}
                source={{uri: this.state.IconRubbish}} 
                />
            </View>
        </TouchableHighlight>
        {/*Show Type of bin  image and StepOfDisposing */}
        <View style={{backgroundColor: '#444444', flex:1,alignItems: 'center'}}>
          <Image           
          style={{width: 100, height: 100}}
          source={{uri: this.state.imagebin}} 
          />
          <Text>{this.state.imagebin}</Text>
        </View>
      </View>
    )
  }
}

const styles = styles = require('./styles');
