import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import ChartsScreen from './screens/Charts';
import SettingsScreen from './screens/Settings';
import { getHeaderTitle } from '@react-navigation/elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import SavedScreen from './screens/Saved';
import ReferScreen from './screens/Refer';
import DetailsScreen from './screens/Details';
import DrawerItems from './constants/DrawerItems';
import Header from './components/Header';
import { StatusBar } from 'expo-status-bar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerType="front"
        initialRouteName="Charts"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
       
      >
        {
          DrawerItems.map(drawer=><Drawer.Screen 
            key={drawer.name}
            name={drawer.name} 
            options={{
            drawerIcon:({focused})=>
             drawer.iconType==='Material' ? 
              <MaterialCommunityIcons 
                  name={drawer.iconName}
                  size={24} 
                  color={focused ? "#e91e63" : "black"} 
              />
            :
            drawer.iconType==='Feather' ?
              <Feather 
                name={drawer.iconName}
                size={24} 
                color={focused ? "#e91e63" : "black"} 
              /> 
            :
              <FontAwesome5 
                name={drawer.iconName}
                size={24} 
                color={focused ? "#e91e63" : "black"} 
              />
            ,
                headerShown:true,
                header: ({ navigation, route, options }) => {
                  const title = getHeaderTitle(options, route.name);
                  return (
                    <Header screen={title}/>
                  );
                }
          
            }} 
            component={
              drawer.name==='Charts' ? ChartsScreen 
                : drawer.name==='Settings' ? SettingsScreen 
                  : drawer.name==='Saved Items' ? SavedScreen 
                    : drawer.name==='Details' ? DetailsScreen
                    : ReferScreen
            } 
          />)
        }
      </Drawer.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
