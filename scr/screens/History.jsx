import React from 'react'
import { StyleSheet, Text, View, Button,Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function History() {
  const navigation = useNavigation();
  
  const film = [
      { id: 1, image: "https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/05/P.jpg" },
      { id: 2, image: "https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/05/P.jpg" },
      { id: 3, image: "https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/05/P.jpg" },
      { id: 4, image: "https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/05/P.jpg" },
      { id: 5, image: "https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/05/P.jpg" }
    ];
  const film2 = [
  { id: 1, image: "https://i.ytimg.com/vi/suya4R1RHPc/maxresdefault.jpg" },
  { id: 2, image: "https://i.ytimg.com/vi/suya4R1RHPc/maxresdefault.jpg" },
  { id: 3, image: "https://i.ytimg.com/vi/suya4R1RHPc/maxresdefault.jpg" },
  { id: 4, image: "https://i.ytimg.com/vi/suya4R1RHPc/maxresdefault.jpg" },
  { id: 5, image: "https://i.ytimg.com/vi/suya4R1RHPc/maxresdefault.jpg" }
];

const film3 = [
  { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yx3ONCblMPQpZwwUzUyRz6tVsVQuUaiC0w&s=" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yx3ONCblMPQpZwwUzUyRz6tVsVQuUaiC0w&s=" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yx3ONCblMPQpZwwUzUyRz6tVsVQuUaiC0w&s=" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yx3ONCblMPQpZwwUzUyRz6tVsVQuUaiC0w&s=" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yx3ONCblMPQpZwwUzUyRz6tVsVQuUaiC0w&s=" },
];

    return (
      <View style={{ height :'100%' , width:'100%' , backgroundColor:'black' }}>
         <ScrollView>
  <Text style={{color:'white',fontSize:36,marginTop:50}}>History</Text>
                <FlatList
              
              data={film3}
              renderItem={({item}) => (
              
                 <Image style={styles.mainscooalimage} source={{ uri: item.image }} />
              )
              }
               keyExtractor={item => item.id.toString()}
                      horizontal={false}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}/>
              
                      <FlatList
              
              data={film}
              renderItem={({item}) => (
              
                 <Image style={styles.mainscooalimage} source={{ uri: item.image }} />
              )
              }
               keyExtractor={item => item.id.toString()}
                      horizontal={false}  
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}/>
              
              
                   <FlatList
              
              data={film2}
              renderItem={({item}) => (
              
                 <Image style={styles.mainscooalimage} source={{ uri: item.image }} />
              )
              }
               keyExtractor={item => item.id.toString()}
                      horizontal={false}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}/>
           
              
        
                  </ScrollView>
      
      </View>
    )
  }

const styles = StyleSheet.create({
     mainscooalimage:
  {
width:390,
height:200,
marginTop:9

  }})