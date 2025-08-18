import { Image, ImageBackground, StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Movies() {
  const navigation = useNavigation();

  const film = [
    { id: 1, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 2, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 3, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 4, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 5, image: "https://static.toiimg.com/photo/61271391.cms" }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ImageBackground
        style={{ flex: 1, width: '100%' }}
        source={{ uri: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png' }}
      > <Text style={styles.text}>Previews</Text>
        <FlatList
          data={film}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate(" ", { movieId: item.id })}>
              <Image style={styles.scooalimage} source={{ uri: item.image }} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          style={{ marginTop: 20 }}
        />
        <TouchableOpacity><Image style={styles.button1fonts}source={{uri:'https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png'}}></Image></TouchableOpacity>
<TouchableOpacity>
  <Image style={styles.info} source={{uri:'https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Info-512.png'}}/>
</TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1font}>Hello</Text>
        </TouchableOpacity>
        
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    width: 90,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 235,      
    alignSelf: 'center'
    ,elevation: 7
  },
  button1fonts:{
        width: 50,
    height: 50,
    tintColor:'white',
   marginLeft:-240,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 230,       // screen ke bottom se
    alignSelf: 'center'
  },
   info:{
        width: 50,
    height: 50,
    tintColor:'white',
   marginLeft:240,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 230,       // screen ke bottom se
    alignSelf: 'center'
    ,elevation: 12
  },
  button1font: {
    color: 'black',
    fontSize: 16
  },
  scooalimage: {
    width: 130,
    height: 170,
    borderRadius: 15,
    marginTop:460
  }, 
  text: {
    fontSize:25,
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 190,     
    marginRight:290, 
    alignSelf: 'center'
    ,elevation: 12
  }
});
