import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Button, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <ImageBackground
        source={{ uri: 'https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/481040194_122143021034398778_5309684807048456836_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=h8Qkohq097IQ7kNvwHTo5_L&_nc_oc=AdlA-SxaK7ob4ua8_1KS7fy3fTurvtKDWO4Z41a4ZFlJd95fxA1M7GEZnrOlUZ3a56s&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=aRVBqm7UM69hVcRf6_5eoA&oh=00_AfXWivB5P0ov65WeX7qn0TWtOzLB9ZZHmdWhXJeBAi94iA&oe=68A15766' }}
        style={{ height: 350, width: 360 }}
        imageStyle={{ opacity: 0.3 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Actioncat")
        }>
          <Text style={styles.text1}>ACTION</Text>

        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text2} onPress={() => navigation.navigate('ProfileTab', { screen: 'Actioncat' })}>THRILLER</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text2} onPress={() => navigation.navigate('ProfileTab', { screen: 'Actioncat' })}>COMEDY</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text2} onPress={() => navigation.navigate('ProfileTab', { screen: 'Actioncat' })}>HORROR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text2} onPress={() => navigation.navigate('ProfileTab', { screen: 'Actioncat' })}>THRILLER</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text2} onPress={() => navigation.navigate('ProfileTab', { screen: 'Actioncat' })}>COMEDY</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text2} onPress={() => navigation.navigate('ProfileTab', { screen: 'Actioncat' })}>HORROR</Text>

        </TouchableOpacity>

      </ImageBackground>


    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  text1: {
    marginTop: -60,
    marginBottom: 10,
    color: 'white',
    fontSize: 30,
    marginLeft: 30
  }
  ,
  text2: {
    marginBottom: 20,
    color: 'white',
    fontSize: 30,
    marginLeft: 30
  }
  , view: {
    paddingTop: 9,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#101d52'
    , flex: 1
  }


})