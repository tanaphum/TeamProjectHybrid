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
    backgroundColor: '#4d4dff',
  },
  ComposeBinBox : {
    alignItems: 'center',
    flex:1,
    backgroundColor: '#33cc33',
  },
    RecycleBinBox : {
    alignItems: 'center',
    flex:1,
    backgroundColor: '#ffff4d',
  },
  HazardBinBox : {
    alignItems: 'center',
    flex:1,
    backgroundColor: '#ff1a1a'
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
  },
  SectionItem :{
    backgroundColor: '#ccc',
    flexDirection: 'row',
  },
  BinItembox :{
    backgroundColor: '#ededed',
    padding: 10
  },
  appTitle : {
      alignItems: 'center', 
      backgroundColor: '#eee',
  },
  TextStepOfDisposing :{
    color : '#eee',
  },
  TextBinDescription :{
    color : '#eee',
    fontSize : 30,
    marginBottom : 20
  }
});
