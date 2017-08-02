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
      dataSource:0,
      
             Bsection:[
    	{
     
      name : 'battery' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/full-battery-filled/ios7/25',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },
      {
   	 
    	name : 'berverage container' ,
	category: 'recycle',
  Obj_icon: 'https://png.icons8.com/wine-bottle/dusk/64',
  img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
  StepOfDisposing : 'should clean up  before trash it.'
    	},
      {
     
      name : 'broken glass' ,
  category: 'recycle',
  Obj_icon: 'https://png.icons8.com/broken-bottle/win10/16',
  img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
  StepOfDisposing : 'Should wrapping the  garbage with the bag.'
      }
	],
  Csection:[
      

 {
     
      name : 'can' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/beer-can/office/16',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : '  Should pull off the metal the garbage before trash.'
      },
      {
     
      name : 'candy bag' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/christmas-candy/color/24',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
      {
      name : 'car battery',
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/car-battery/ios7/25',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },
      {
     
      name : 'cleaning solution',
  category: 'compostable',
  Obj_icon: 'https://png.icons8.com/clean/ios7/25',
  img_bin: 'http://www.regionofwaterloo.ca/en/aboutTheEnvironment/resources/RegionStudio2521.jpg',
  StepOfDisposing : 'Should dehydate the gabage or remove water in gabage  before trash.'
      },
       
      {
     
      name : 'cloth',
  category: 'general',
  Obj_icon: 'https://png.icons8.com/clothes/nolan/64',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
{
          name : 'cosmetic',
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/lipstick/color/24',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },
      {
     
      name : 'cup',
  category: 'general',
  Obj_icon: 'https://png.icons8.com/cup/ultraviolet/20',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
  ],
  Esection:[
      {
     
      name : 'engine oils' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/engine-oil/color/24',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },
      {
     
      name : 'expire medicine' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/pill/office/16',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      }
      ],
       Fsection:[
     
      {
     
      name : 'fluorescent' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/fluorescent-bulb/dusk/64',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },
       {
     
      name : 'foam box' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/box/ios7/25',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
       {
     
      name : 'food box' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/food-as-resources/ios7/25',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
       {
     
      name : 'food waste' ,
  category: 'compostable',
  Obj_icon: 'https://png.icons8.com/waste/color/24',
  img_bin: 'http://www.regionofwaterloo.ca/en/aboutTheEnvironment/resources/RegionStudio2521.jpg',
  StepOfDisposing : 'Should dehydate the gabage or remove water in gabage  before trash.'
      },
       {
     
      name : 'fruit and vegetable peels' ,
  category: 'compostable',
  Obj_icon: 'https://png.icons8.com/banana/office/16',
  img_bin: 'http://www.regionofwaterloo.ca/en/aboutTheEnvironment/resources/RegionStudio2521.jpg',
  StepOfDisposing : 'Should dehydate the gabage or remove water in gabage  before trash.'
      }],
       Gsection:[
       {
     
      name : 'glass' ,
  category: 'recycle',
  Obj_icon: 'https://png.icons8.com/wine-glass/Dusk_Wired/64',
  img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
  StepOfDisposing : 'Should wrapping the  garbage with the bag.'
      }],
       Hsection:[
       {
     
      name : 'hazardous container' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/poison/Dusk_Wired/64',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },

  ],
  Isection:[
       {
     
      name : 'insecticide' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/insecticide/ultraviolet/20',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },
        {
     
      name : 'instant noodle bag' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/noodles/color/24',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
        {
     
      name : 'instant noodle cup' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/noodles/color/24',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },

  ],
  Msection:[
       {
     
      name : 'meats' ,
  category: 'compostable',
  Obj_icon: 'https://png.icons8.com/year-of-pig/ultraviolet/20',
  img_bin: 'http://www.regionofwaterloo.ca/en/aboutTheEnvironment/resources/RegionStudio2521.jpg',
  StepOfDisposing : 'Should dehydate the gabage or remove water in gabage  before trash.'
      },
      {
     
      name : 'metal' ,
  category: 'recycle',
  Obj_icon: 'https://png.icons8.com/metal/ultraviolet/20" title="Metal',
  img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
  StepOfDisposing : 'Should wrapping the  garbage with the bag.'
      },

  ],
  Psection:[
       {
     
      name : 'paper cup' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/coffee-to-go/ultraviolet/20',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
       {
     
      name : 'piece of paper' ,
  category: 'recycle',
  Obj_icon: 'https://png.icons8.com/paper-plane/ultraviolet/20',
  img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
  StepOfDisposing : 'Should remove the metal before trash it.'
      },
       {
     
      name : 'plastic bag' ,
  category: 'recycle',
  Obj_icon: 'https://png.icons8.com/shopping-bag/ios7/25',
  img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
  StepOfDisposing : 'should clean up the plastic before trash it.'
      },
       {
     
      name : 'plastic bottle' ,
  category: 'recycle',
  Obj_icon: 'https://png.icons8.com/wine-bottle/Dusk_Wired/64',
  img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
  StepOfDisposing : 'should clean up the plastic before trash it.'
      },
       {
     
      name : 'plastic container' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/package/ultraviolet/20',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
  ],
  Ssection:[
       {
     
      name : 'snack bag' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/french-fries-filled/ios7/25',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },
      {
     
      name : 'straw' ,
  category: 'general',
  Obj_icon: 'https://png.icons8.com/soda-cup/ios7/25',
  img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
  StepOfDisposing : ' Should pull off the metal the garbage before trash.'
      },

  ],
  Tsection:[
       {
     
      name : 'thinner' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/oil-industry/ios7/25',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
      },
        {
     
      name : 'tissue paper' ,
  category: 'hazard',
  Obj_icon: 'https://png.icons8.com/toilet-paper/ultraviolet/20',
  img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
  StepOfDisposing : 'Should wrapping the hazard garbage with the bag.'
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
          <View style={styles.appTitle}>
          <Text style={{fontSize: 30}}>Check Rubbish</Text>
          </View>
           <View style = {styles.ViewRow}>
              <View style = {styles.BackBox} >
                
              </View>
              <View style = {styles.GeneralBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('GeneralComponent')}>
                <View><Text>General</Text><Text>{this.state.dataSource.general}</Text></View></TouchableHighlight>
                
              </View>

              <View style = {styles.RecycleBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('RecycleComponent')}>
                <View><Text>Recycle</Text><Text>{this.state.dataSource.recycle}</Text></View></TouchableHighlight>
              </View>

              <View style = {styles.ComposeBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('CompostableComponent')}>
                <View><Text style={{fontSize : 12}}>Compost</Text><Text>{this.state.dataSource.compostable}</Text></View></TouchableHighlight>
              </View>

              <View style = {styles.HazardBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('HazardComponent')}>
                <View><Text>Hazard</Text><Text>{this.state.dataSource.hazardous}</Text></View></TouchableHighlight>
              </View>

                   <TouchableHighlight onPress={() => this.props.changeComponent('TwoTH') } 
        style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>TH</Text></TouchableHighlight>

          </View>
          <ScrollView>
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>B</Text></TouchableHighlight>
          {this.lapsList(this.state.Bsection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>C</Text></TouchableHighlight>
          {this.lapsList(this.state.Csection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>E</Text></TouchableHighlight>
          {this.lapsList(this.state.Esection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>F</Text></TouchableHighlight>
          {this.lapsList(this.state.Fsection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>G</Text></TouchableHighlight>
          {this.lapsList(this.state.Gsection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>H</Text></TouchableHighlight>
          {this.lapsList(this.state.Hsection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>I</Text></TouchableHighlight>
          {this.lapsList(this.state.Isection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>M</Text></TouchableHighlight>
          {this.lapsList(this.state.Msection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>P</Text></TouchableHighlight>
          {this.lapsList(this.state.Psection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>S</Text></TouchableHighlight>
          {this.lapsList(this.state.Ssection)}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>T</Text></TouchableHighlight>
          {this.lapsList(this.state.Tsection)}
          </ScrollView>
          

          
      </View>
    )
  }

  lapsList(arr) {

    return arr.map((data) => {
      return (
        <View>

          <TouchableHighlight onPress={() => this.props.goToDescription('Three',data)}
        style={styles.button}><Text>{data.name}                 <Image            
                style={{width: 50, height: 50}}
                source={{uri: data.Obj_icon}} 
                /></Text></TouchableHighlight>
          </View>
      )
    })

}

}
const styles = styles = require('./styles');
