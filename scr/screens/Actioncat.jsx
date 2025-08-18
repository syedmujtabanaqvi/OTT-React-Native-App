import React from 'react'
import { StyleSheet, Text, View, Button,Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Actioncat = () => {

const navigation = useNavigation();

const film3 = [
    { id: 1, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 2, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 3, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 4, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" },
    { id: 5, image: "https://m.media-amazon.com/images/M/MV5BYzc1ZmM5OGMtNTRkNS00Mzc2LTg2ODItMGY3ZWZhZjJlZTM5XkEyXkFqcGc@._V1_.jpg" }
  ];

    const film =[
{id:1,image:'https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg'},
{id:2,image:'https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg'},
{id:3,image:'https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg'},
{id:4,image:'https://i.ytimg.com/vi/erLgHUpnN_k/maxresdefault.jpg'}]
  
  return (
    <View style={{ height :'100%' , width:'100%' , backgroundColor:'black' }}>

         <ScrollView>
            <FlatList
            
            data={film}
            renderItem={({item}) => (
            
               <Image style={styles.mainscooalimage} source={{ uri: item.image }} />
            )
            }
             keyExtractor={item => item.id.toString()}
                      horizontal
                      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}/>
            
            
                {/* Film 2 */}
                <FlatList
                  data={film3}
                  renderItem={({ item }) => (
                    <Image style={styles.scooalimage1} source={{ uri: item.image }} />
                  )}
                  keyExtractor={item => item.id.toString()}
                  horizontal
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
                      {/* Film 2 */}
                <FlatList
                  data={film3}
                  renderItem={({ item }) => (
                    <Image style={styles.scooalimage2} source={{ uri: item.image }} />
                  )}
                  keyExtractor={item => item.id.toString()}
                  horizontal
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
                            {/* Film 2 */}
                <FlatList
                  data={film3}
                  renderItem={({ item }) => (
                    <Image style={styles.scooalimage3} source={{ uri: item.image }} />
                  )}
                  keyExtractor={item => item.id.toString()}
                  horizontal
                  ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
                </ScrollView>
    
    </View>
  )
}

export default Actioncat

const styles = StyleSheet.create({

  scooalimage1: {
    width: 130,
    height: 170,
    borderRadius: 15,
    justifyContent:'center',
    alignContent:'center',
   marginTop:20,
    marginBottom: 10,
    
  },
   scooalimage2: {
    width: 130,
    height: 170,
    justifyContent:'center',
    alignContent:'center',
    borderRadius: 15,
    marginTop:20,
   marginBottom: 10,
   
  },
   scooalimage3: {
    width: 130,
    height: 170,
    justifyContent:'center',
    alignContent:'center',
    borderRadius: 15,
    marginTop:20,
    marginBottom:100
    
  },  mainscooalimage:
  {
width:390,
height:200,
marginTop:14

  }

});
