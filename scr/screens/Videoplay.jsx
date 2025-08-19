import { Image, StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Videoplay() {
    const film = [
    { id: 1, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 2, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 3, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 4, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 5, image: "https://static.toiimg.com/photo/61271391.cms" }
  ];
const navigation = useNavigation ()
  return (

    <View style={{flex:1,backgroundColor:'black'}}>
    <Image style={{margintop:40,height:200,width:380}}source={{uri:'https://media.istockphoto.com/id/1252447446/vector/video-player-screen-with-bar-multimedia-interface-with-player-bar-for-web.jpg?s=612x612&w=0&k=20&c=7ydoT5M3SouYSP5YADAz6aoCnDjwQTijhi4HhDMUwqg='}}></Image>
    <Text style={{fontSize:30 ,paddingTop:60, color:'white'}} > Extraction 2</Text>
  <Text style={{fontSize:17 ,paddingTop:10, color:'white'}} > Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangster's imprisoned family.
   </Text>
     <Image style={{height:160,width:160,marginTop:-50,alignContent:'flex-end'}}source={{uri:'https://freesvg.org/img/16231558095-star-rating.png'}}></Image>

   <Text style={styles.text}>Episods</Text>
          <FlatList
            data={film}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("Home", { movieId: item.id })}>
                <Image style={styles.scooalimage} source={{ uri: item.image }} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            style={{ marginTop: -10 }}
          />

    </View>
  )}
const styles = StyleSheet.create({

    scooalimage: {
    width: 130,
    height: 170,
    borderRadius: 15,
    
  }, 
  text: {
    fontSize:27,
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 200,     
    marginRight:290, 
    alignSelf: 'center'
    ,elevation: 12
  }
});
