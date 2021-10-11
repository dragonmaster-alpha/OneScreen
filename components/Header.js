import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({screen}){
  const navigation = useNavigation();
   return(
    <View style={headerStyles.container}>
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
            <FontAwesome5 name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
    </View>
   ) 
}

const headerStyles=StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        backgroundColor:'black',
        color: 'white',
        elevation:5,
        height:50,
        display:'flex',
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'space-between'
    }
})