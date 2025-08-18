import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const film = [
    { id: 1, image: "https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_.jpg" },
    { id: 2, image: "https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_.jpg" },
    { id: 3, image: "https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_.jpg" },
    { id: 4, image: "https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_.jpg" },
    { id: 5, image: "https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_.jpg" },
  ];

  const film2 = [
    { id: 1, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 2, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 3, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 4, image: "https://static.toiimg.com/photo/61271391.cms" },
    { id: 5, image: "https://static.toiimg.com/photo/61271391.cms" }
  ];

  const film3 = [
    { id: 1, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 2, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 3, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 4, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 5, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" }
  ];
const mainposter = [
  { id: 1, image: "https://m.media-amazon.com/images/S/pv-target-images/0d173bf911301dff694f12bb90f588c83c82a54f1c49d86e25495f9fa99b4806.jpg" },
  { id: 2, image: "https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg" },
  { id: 3, image: "https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg" },
  { id: 4, image: "https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg" },
  { id: 5, image: "https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg" }
];

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
<FlatList

data={mainposter}
renderItem={({item}) => (

   <Image style={styles.mainscooalimage} source={{ uri: item.image }} />
)
}
 keyExtractor={item => item.id.toString()}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}/>


        {/* TRENDING */}
        <Text style={{ fontSize: 27, color: 'white', padding: 10 }}>TRENDING</Text>

        {/* Film 1 */}
        <FlatList
          data={film}
          renderItem={({ item }) => (
            <Image style={styles.scooalimage} source={{ uri: item.image }} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />

<Text style={{fontSize: 27, color: 'white', padding: 10,marginTop:-40}}>Action</Text>
        {/* Film 2 */}
        <FlatList
          data={film2}
          renderItem={({ item }) => (
            <Image style={styles.scooalimage1} source={{ uri: item.image }} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
<Text style={{fontSize: 27, color: 'white', padding: 10,marginTop:-28}}>Comedy</Text>
        {/* Film 3 */}
        <FlatList
          data={film3}
          renderItem={({ item }) => (
            <Image style={styles.scooalimage1} source={{ uri: item.image }} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scooalimage: {
    width: 130,
    height: 170,
    borderRadius: 15,
    marginBottom: 40,
  },
  scooalimage1: {
    width: 130,
    height: 170,
    borderRadius: 15,
    marginBottom: 20,
  },
  mainscooalimage:
  {
width:390,
height:200,
marginTop:14

  }
});
