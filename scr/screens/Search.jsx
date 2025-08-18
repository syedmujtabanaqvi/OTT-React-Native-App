
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Search = () => {

  const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:'black' }}>
    
   <TextInput placeholder='Search'  placeholderTextColor="white"style={{color:'red',fontSize:18,alignContent:'center',justifyContent:'center' ,marginTop:39,borderColor:'#070068ff',borderWidth:2,borderRadius:30,marginLeft:25,marginRight:25}}></TextInput>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})