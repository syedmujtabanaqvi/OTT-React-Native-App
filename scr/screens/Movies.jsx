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
        source={{ uri: 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYlm2USpV879vt0eFRiZoOHpNB1QtpDLPk5lwniNCzH1JknJ5bpnLjDt1YOkFjUBXn5_RbRh8AyaJLmOMpplrdJYSvLCjF4VwfB7VsMsqQztWUCeP4Og3XxYpCh-AWbY7ONqXg.jpg?r=176' }}
      >
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
          style={{ marginTop: 20 }}
        />
        <TouchableOpacity><Image style={styles.button1fonts}source={{uri:'https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png'}}></Image></TouchableOpacity>

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
    bottom: 220,       // screen ke bottom se
    alignSelf: 'center' // screen ke center me horizontally
  },
  button1fonts:{
        width: 50,
    height: 50,
    tintColor:'white',
   marginLeft:-240,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 250,       // screen ke bottom se
    alignSelf: 'center'
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
  }
});
