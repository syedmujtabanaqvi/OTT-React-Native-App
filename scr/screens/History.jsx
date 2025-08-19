import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function History() {
  const film = [
    { id: 1, image: "https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/05/P.jpg" },
    { id: 2, image: "https://kashmirmonitor-s01.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2023/05/P.jpg" },
  ];

  const film2 = [
    { id: 1, image: "https://i.ytimg.com/vi/suya4R1RHPc/maxresdefault.jpg" },
    { id: 2, image: "https://i.ytimg.com/vi/suya4R1RHPc/maxresdefault.jpg" },
  ];

  const film3 = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yx3ONCblMPQpZwwUzUyRz6tVsVQuUaiC0w&s=" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yx3ONCblMPQpZwwUzUyRz6tVsVQuUaiC0w&s=" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        data={film3}
        renderItem={({ item }) => (
          <Image style={styles.mainscooalimage} source={{ uri: item.image }} />
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (
          <>
            
            {film.map(f => (
              <Image key={f.id} style={styles.mainscooalimage} source={{ uri: f.image }} />
            ))}
          </>
        )}
        ListFooterComponent={() => (
          <>
            {film2.map(f => (
              <Image key={f.id} style={styles.mainscooalimage} source={{ uri: f.image }} />
            ))}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainscooalimage: {
    width: 390,
    height: 200,
    marginTop: 9,
  },
});
