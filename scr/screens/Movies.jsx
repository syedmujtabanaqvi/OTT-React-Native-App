import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



export default function Movies() {
    const navigation = useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'#000'}}>
     
      <ImageBackground

      style={{height:500,width:400}}
      source={{uri:'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYlm2USpV879vt0eFRiZoOHpNB1QtpDLPk5lwniNCzH1JknJ5bpnLjDt1YOkFjUBXn5_RbRh8AyaJLmOMpplrdJYSvLCjF4VwfB7VsMsqQztWUCeP4Og3XxYpCh-AWbY7ONqXg.jpg?r=176'}}
      
      >
        <TouchableOpacity style={{   width:90,height:40,
        
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center'
,marginTop:450
,marginLeft:160
        }} > <Text style={{color: 'black', fontSize: 16}}>Hello</Text></TouchableOpacity>
      </ImageBackground>

    </View >
  )
}

const styles = StyleSheet.create({})