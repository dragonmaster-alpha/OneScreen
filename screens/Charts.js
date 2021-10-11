import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import BezierLineChart from '../components/BezierLineChart';

export default function ChartsScreen() {
    const rateArr = [
      {'name': 'income', 'rate': '75%'},
      {'name': 'outcome', 'rate': '25%'},
    ]
    const [period, setPeriod] = useState(1)
    return (
      <ScrollView style={chartStyles.container}>
        <Text style={chartStyles.caption}>your balance</Text>
        {period == 1 && <BezierLineChart period={1} />}
        {period == 2 && <BezierLineChart period={2} />}
        {period == 3 && <BezierLineChart period={3} />}
        {period == 4 && <BezierLineChart period={4} />}
        
        <View style={chartStyles.btnWrapper}>
          <TouchableOpacity style={[chartStyles.btnIndiv, {width: '120px'}, period == 1 ? {backgroundColor: 'rgb(254, 106, 41)'} : {}]} onPress={() => {setPeriod(1)}}><Text style={[chartStyles.btnTitle, {fontSize: '18px'}, period == 1 ? {color: 'white'} : {}]}>Apr to Jun</Text></TouchableOpacity>
          <TouchableOpacity style={[chartStyles.btnIndiv, {width: '72px'}, period == 2 ? {backgroundColor: 'rgb(254, 106, 41)'} : {}]} onPress={() => {setPeriod(2)}}><Text style={[chartStyles.btnTitle, {fontSize: '14px', lineHeight:'1'}, period == 2 ? {color: 'white'} : {}]}>1<br/>Month</Text></TouchableOpacity>
          <TouchableOpacity style={[chartStyles.btnIndiv, {width: '72px'}, period == 3 ? {backgroundColor: 'rgb(254, 106, 41)'} : {}]} onPress={() => {setPeriod(3)}}><Text style={[chartStyles.btnTitle, {fontSize: '14px', lineHeight:'1'}, period == 3 ? {color: 'white'} : {}]}>6<br/>Month</Text></TouchableOpacity>
          <TouchableOpacity style={[chartStyles.btnIndiv, {width: '72px'}, period == 4 ? {backgroundColor: 'rgb(254, 106, 41)'} : {}]} onPress={() => {setPeriod(4)}}><Text style={[chartStyles.btnTitle, {fontSize: '14px', lineHeight:'1'}, period == 4 ? {color: 'white'} : {}]}>1<br/>Year</Text></TouchableOpacity>
        </View>
        {rateArr.map((rate, id) =>
        <View style={chartStyles.wrapper} key={id}>
          <Text style={chartStyles.wrapperText}>{rate.name}</Text>
          <Text style={chartStyles.rateText}>
          {rate.rate}
          <FontAwesome name={ rate.name == 'income' ? "long-arrow-down" : "long-arrow-up" } style={chartStyles.rateText} />
          </Text>
        </View>
        )}
      </ScrollView>
    );
  }

  const chartStyles=StyleSheet.create({
    container:{
        marginTop: 50,
        width:'100%',
        backgroundColor:'black',
        color: 'white',
        elevation:5,
        height: '100%'
    }, 
    caption: {
      color: 'white',
      fontSize: '28px',
      fontWeight: '600',
      textTransform: 'capitalize',
      fontFamily: 'Open Sans',
      margin: '40px'
    }, 
    btnWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: '40px'
    },
    btnIndiv: {
      backgroundColor: '#424242',
      borderRadius: '24px',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60px',
    },
    btnTitle: {
      color: '#d2d2d2',
      justifyContent: 'center',
      alignItems: 'center'
    },
    wrapper: {
      paddingLeft: '40px',
      paddingRight: '80px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    }, 
    wrapperText: {
      color: '#9a9a9a',
      fontSize: '18px'
    }, 
    rateText: {
      color: '#d2d2d2',
      fontSize: '18px',
      marginLeft: '10px'
    }
})