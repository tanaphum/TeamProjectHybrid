'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports =StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    
  },
  GeneralBinBox : {
    alignItems: 'center',
    flex:1,
    backgroundColor: '#2B60DE',
  },
  ComposeBinBox : {
    alignItems: 'center',
    flex:1,
    backgroundColor: 'green',
  },
    RecycleBinBox : {
    alignItems: 'center',
    flex:1,
    backgroundColor: 'yellow',
  },
  HazardBinBox : {
    alignItems: 'center',
    flex:1,
    backgroundColor: 'red'
  },
  BackBox:{
    alignItems: 'center',
    flex:1,
    backgroundColor: '#000000',
  },
  LanguageChangeBox:{
    alignItems: 'center',
    flex:1,
    backgroundColor: '#8103ff',

  },
  textBinCompose : {
    fontSize : 12,
  },
  textLanguageChange : {
    fontSize : 30,
  },
  ViewRow :{
    flexDirection: 'row'
  }

});