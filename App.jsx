import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Home from './scr/screens/Home';
import Profile from './scr/screens/Profile';
import Categories from './scr/screens/Categories';
import Search from './scr/screens/Search';
import Privacy from './scr/screens/Privacy';
import Actioncat from './scr/screens/Actioncat';
import Movies from './scr/screens/Movies';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 🔹 Search Button Component for Header
function SearchHeaderButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ marginRight: 15 }}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149852.png' }}
        style={{ width: 25, height: 25, tintColor: 'white' }}
      />
    </TouchableOpacity>
  );
}

// Profile Stack



function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Privacy" component={Privacy} /> 
      <Stack.Screen name="Actioncat" component={Actioncat} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}


function CategoriesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Actioncat"
        component={Actioncat}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Home Stack (with Search inside Stack, not Tab)
function HomeStack() {
  return (
    
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 29 },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerRight: () => <SearchHeaderButton />, // ✅ Search button in header
        }}
      />
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function Tabnavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000000ff', height: 60, paddingBottom: 5 },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack} // ✅ Home + Search in stack
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }}
              style={{ width: 25, height: 25, tintColor: 'white' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
              style={{ width: 25, height: 25, tintColor: 'white' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CategoriesTab"
        component={CategoriesStack}
        options={{
          title: 'Categories',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/126/126122.png' }}
              style={{ width: 25, height: 25, tintColor: 'white' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabnavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
