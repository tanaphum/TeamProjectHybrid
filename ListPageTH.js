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
OneSection:[
              {
     
                    name : 'กระดาษชำระ' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/toilet-paper/ultraviolet/20',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    {
     
                    name : 'กระป่องเปล่า' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/food-as-resources/ios7/25',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'กระป๋องควรจะแยกประเภทว่าเป็นอลูมิเนียมหรือว่าเหล็กและควรล้างทำความสะอาดภายในให้เรียบร้อยก่อน '
                    },
                    {
     
                    name : 'กล่องโฟม' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/box/ios7/25',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    {
     
                    name : 'กล่องอาหาร' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/food-as-resources/ios7/25',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                   

      ],
TwoSection:[
              {
     
                    name : 'ขวดแก้วเปล่า' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/wine-glass/Dusk_Wired/64',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'ขวดควรแยกเป็นขวดใส ขวดสีชา และขวดสีอื่นๆ และควรล้างทำความสะอาดก่อนนำมาส่ง ควรแยกฝาที่เป็นโลหะทิ้งไปกับขยะที่ไม่สามารถเผาได้ ฝาพลาสติกทิ้งไปกับขวดพลาสติก ส่วนขวดที่แตกแล้วทิ้งไปกับขยะที่ไม่สามารถเผาได้'
                    },
                    {
     
                    name : 'ขวดน้ำพลาสติกเปล่า' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/wine-bottle/Dusk_Wired/64',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'ขวดควรแยกเป็นขวดใส ขวดสีชา และขวดสีอื่นๆ และควรล้างทำความสะอาดก่อนนำมาส่ง ควรแยกฝาที่เป็นโลหะทิ้งไปกับขยะที่ไม่สามารถเผาได้ ฝาพลาสติกทิ้งไปกับขวดพลาสติก ส่วนขวดที่แตกแล้วทิ้งไปกับขยะที่ไม่สามารถเผาได้'
                    },   

      ],
ThreeSection:[
              {
     
                    name : 'ถ้วยกระดาษ' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/coffee-to-go/ultraviolet/20',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    {
     
                    name : 'ถ้วยบะหมี่กึ่งสำเร็จรูป' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/noodles/color/24',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    {
     
                    name : 'ถ่าน' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/full-battery-filled/ios7/25',
                img_bin: 'http://www.falkirk.gov.uk/services/bins-rubbish-recycling/household-waste/what-goes-in-my-bins/images/green-bin.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                    {
     
                    name : 'ถุงขนม' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/christmas-candy/color/24',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    {
     
                    name : 'ถุงบะหมี่กึ่งสำเร็จรูป' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/noodles/color/24',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    {
     
                    name : 'ถุงพลาสติก' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/shopping-bag/ios7/25',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'ทิ้งได้เลย'
                    },
                   

      ],
FourSection:[
              {
     
                    name : 'ทินเนอร์' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/oil-industry/ios7/25',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                   

      ],
FiveSection:[
              {
     
                    name : 'น้ำมันเครื่อง' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/engine-oil/color/24',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                   

      ],
SixSection:[
              {
     
                    name : 'บรรจุภัณฑ์เปล่า' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/wine-bottle/dusk/64',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'ขวด พลาสติกควรจะล้างทำความสะอาดก่อนทิ้งพลาสติกบรรจุภัณฑ์ เฉพาะสีขาวควรล้างทำความสะอาดก่อนทิ้งถุงพลาสติก ขวดพลาสติก ควรล้างทำความสะอาดก่อนทิ้ง'
                    },
                    {
     
                    name : 'บรรจุภัณฑ์อันตราย' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/poison/Dusk_Wired/64',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                  

      ],
SevenSection:[
              {
     
                    name : 'ผลิตภัณฑ์ทำความสะอาด' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/clean/ios7/25',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                    
                  

      ],
EightSection:[
              {
     
                    name : 'พลาสติกที่ใส่อาหารแล้ว' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/package/ultraviolet/20',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    
                  

      ],
NineSection:[
              {
     
                    name : 'ยากำจัดแมลง' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/insecticide/ultraviolet/20',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                    {
     
                    name : 'ยาหมดอายุ' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/pill/office/16',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                    
                  

      ],
TenSection:[
              {
     
                    name : 'หลอดไฟ' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/fluorescent-bulb/dusk/64',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                    {
     
                    name : 'หลอดดูด' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/soda-cup/ios7/25',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง '
                    },
                     {
     
                    name : 'ห่อลูกอม' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/christmas-candy/color/24',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    
                  

      ],
ElevenSection:[
              {
     
                    name : 'อาหารเสีย' ,
                category: 'compostable',
                Obj_icon: 'https://png.icons8.com/chicken/office/16',
                img_bin: 'http://www.regionofwaterloo.ca/en/aboutTheEnvironment/resources/RegionStudio2521.jpg',
                StepOfDisposing : 'ควรรีดน้ำออกให้หมดก่อน'
                    }
                    
                  

      ],
OtherSection:[
              {
     
                    name : 'เครื่องสำอาง' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/lipstick/color/24',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
                    },
                    {
     
                    name : 'เนื้อสัตว์' ,
                category: 'compostable',
                Obj_icon: 'https://png.icons8.com/year-of-pig/ultraviolet/20',
                img_bin: 'http://www.regionofwaterloo.ca/en/aboutTheEnvironment/resources/RegionStudio2521.jpg',
                StepOfDisposing : 'ควรรีดน้ำออกให้หมดก่อน'
                    },
                  {
     
                    name : 'เปลือกผักผลไม้' ,
                category: 'compostable',
                Obj_icon: 'https://png.icons8.com/banana/office/16',
                img_bin: 'http://www.regionofwaterloo.ca/en/aboutTheEnvironment/resources/RegionStudio2521.jpg',
                StepOfDisposing : 'ควรรีดน้ำออกให้หมดก่อน'
                    },
                     {
     
                    name : 'เศษแก้ว' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/broken-bottle/win10/16',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'ใส่ถุงพลาสติกก่อนนำไปทิ้ง'
                    },
                     {
     
                    name : 'เศษกระดาษ' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/paper-plane/ultraviolet/20',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'ทิ้งได้เลย'
                    },
                     {
     
                    name : 'เสื้อผ้า' ,
                category: 'general',
                Obj_icon: 'https://png.icons8.com/clothes/nolan/64',
                img_bin: 'https://thumbs.dreamstime.com/z/bin-general-waste-26023950.jpg',
                StepOfDisposing : 'ควรนำโลหะออกเสียก่อนทิ้ง'
                    },
                    {
     
                    name : 'เหล็ก' ,
                category: 'recycle',
                Obj_icon: 'https://png.icons8.com/metal/ultraviolet/20" title="Metal',
                img_bin: 'https://previews.123rf.com/images/apopium/apopium1602/apopium160200411/52007129-Yellow-Recycling-Bin-isolated-on-white-background-Stock-Photo.jpg',
                StepOfDisposing : 'ทิ้งได้เลย'
                    },
                    {
     
                    name : 'แบตเตอรี่รถยนต์' ,
                category: 'hazard',
                Obj_icon: 'https://png.icons8.com/car-battery/ios7/25',
                img_bin: 'http://www.laboratoryanalysis.co.uk/image.php?w=700&h=500&file=graphics/products/vwlnos.jpg',
                StepOfDisposing : 'ควรใส่ถุงพลาสติกก่อนนำมาทิ้ง '
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
        <View style={styles.appTitle}>
          <Text style={{fontSize: 30}}>Check Rubbish</Text>
          </View>
           <View style = {styles.ViewRow}>
              <View style = {styles.BackBox} >
                
              </View>
              

              <View style = {styles.GeneralBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('GeneralComponentTH')}>
                <View><Text>ทั่วไป</Text><Text>{this.state.dataSource.general}</Text></View></TouchableHighlight>
                
              </View>

              <View style = {styles.RecycleBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('RecycleComponentTH')}>
                <View><Text>รีไซเคิล</Text><Text>{this.state.dataSource.recycle}</Text></View></TouchableHighlight>
                
              </View>

              <View style = {styles.ComposeBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('CompostableComponentTH')}>
                <View><Text style={{fontSize : 12}}>ย่อยสลาย</Text><Text>{this.state.dataSource.compostable}</Text></View></TouchableHighlight>
              </View>

              <View style = {styles.HazardBinBox}>
                <TouchableHighlight  onPress={() => this.props.changeComponent('HazardComponentTH')}>
                <View><Text>อันตราย</Text><Text>{this.state.dataSource.hazardous}</Text></View></TouchableHighlight>
              </View>



                   <TouchableHighlight onPress={() => this.props.changeComponent('Two') } 
        style={styles.LanguageChangeBox}><Text style={styles.textLanguageChange}>EN</Text></TouchableHighlight>

          </View>
          <ScrollView>
          {/* ก */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ก</Text></TouchableHighlight>
          {this.lapsList(this.state.OneSection)}
          {/* ข */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ข</Text></TouchableHighlight>
          {this.lapsList(this.state.TwoSection)}
          {/* ถ */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ถ</Text></TouchableHighlight>
          {this.lapsList(this.state.ThreeSection)}
          {/* ท */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ท</Text></TouchableHighlight>
          {this.lapsList(this.state.FourSection)}
          {/* น */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>น</Text></TouchableHighlight>
          {this.lapsList(this.state.FiveSection)}
          {/* บ */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>บ</Text></TouchableHighlight>
          {this.lapsList(this.state.SixSection)}
          {/* ผ */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ผ</Text></TouchableHighlight>
          {this.lapsList(this.state.SevenSection)}
          {/* พ */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>พ</Text></TouchableHighlight>
          {this.lapsList(this.state.EightSection)}
          {/* ย */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ย</Text></TouchableHighlight>
          {this.lapsList(this.state.NineSection)}
          {/* ห */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>ห</Text></TouchableHighlight>
          {this.lapsList(this.state.TenSection)}
          {/* สระ */}
          <TouchableHighlight style={styles.SectionItem}><Text style={{fontSize:25 ,color:'blue'}}>สระ</Text></TouchableHighlight>
          {this.lapsList(this.state.OtherSection)}



          </ScrollView>
      </View>
    )
  }

  lapsList(arr) {

    return arr.map((data) => {
      return (
        <View>

          <TouchableHighlight onPress={() => this.props.goToDescription('ThreeTH',data)}
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