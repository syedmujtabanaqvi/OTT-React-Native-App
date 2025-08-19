import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

const Profile = () => {
   const navigation = useNavigation();

return(
<View  style={{backgroundColor: 'black',flex:1,alignItems: 'center'}}>
 <Image style={{height:200,width:200,  marginTop: 80, marginLeft: -10 ,borderRadius:140,borderColor:'#000dc5ff',borderWidth:4}} 
  source={{uri:'https://i.pinimg.com/280x280_RS/c8/70/79/c87079b66cfe729d1affd9872107c42b.jpg'}}>
   
  </Image>
  
   <Text style={{ marginRight:90,marginTop:20,color:'white',fontSize:18,  justifyContent: 'center',alignItems: 'center',}}>Syed Mujtaba ali </Text>
   <Text style={{ paddingLeft:17,marginTop:10,color:'white',fontSize:18,  justifyContent: 'center',
          alignItems: 'center',}}>SyedMujtaba526@gmail.com </Text>
   <TouchableOpacity  style={{
      marginTop:20,
      width:140,
      height:50,
      borderWidth: 2,
    
    padding: 10
    ,borderColor:'#000dc5ff'
    ,borderRadius:40
      ,justifyContent: 'center',
          alignItems: 'center',}}onPress={()=>navigation.navigate('History', { screen: 'Privacy' }) }> 
<Text style={{ fontSize: 20,color:'white'}} >History </Text>
  </TouchableOpacity>
 
 
  <TouchableOpacity style={{
     width:140,
      height:50,
      borderWidth: 2,
   
      justifyContent: 'center',
          alignItems: 'center',
          borderColor:'#000dc5ff',
          borderRadius:40,
          marginTop:10}} onPress={()=>navigation.navigate('Privacy') }> 
<Text style={{ fontSize: 20,color:'white'}} >Privacy</Text>
  </TouchableOpacity>
    <TouchableOpacity  style={{
      marginTop:10,
      width:140,
      height:50,
      borderWidth: 2,
    
    padding: 10
    ,borderColor:'#000dc5ff'
    ,borderRadius:40
      ,justifyContent: 'center',
          alignItems: 'center',}}onPress={()=>navigation.navigate('Aboutus') }> 
<Text style={{ fontSize: 20,color:'white'}} >Abouts Us </Text>
  </TouchableOpacity>

<TouchableOpacity>
<Text>

</Text>

</TouchableOpacity>

</View>

)

}
  export default Profile