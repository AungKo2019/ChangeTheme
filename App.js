import { NavigationContainer,DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesigns from 'react-native-vector-icons/AntDesign'
import { EventRegister } from 'react-native-event-listeners';
import React,{useState,useEffect} from 'react'
import theme from './theme/theme';
import themeContext from './theme/themeContext';

const Tab=createMaterialBottomTabNavigator();

export default function App() {
  const [darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    const listeners=EventRegister.addEventListener('ChangeTheme',(data)=>{
      setDarkMode(data)
    })
    return ()=>{
      EventRegister.removeAllListeners(listeners)
    }
  },[darkMode])

  return (
    <themeContext.Provider value={darkMode===true?theme.dark:theme.light}>
      {/* <NavigationContainer theme={darkMode===true? DarkTheme : DefaultTheme}> Cannot read property 'colors' of undefined in MaterialBottomTabViewInner (created by MaterialBottomTabView) */}
      <NavigationContainer>
      <Tab.Navigator initialRouteName='Profile' labeled={false} >
        <Tab.Screen name='Home' component={Home} 
        options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="home" color={color} size={26}/>
        )}}/>
        <Tab.Screen name='Profile' component={Profile}
          options={{tabBarIcon:({color})=>(<Ionicons name="people-circle" color={color} size={26}/>)}}
        />
        <Tab.Screen name='About' component={About}
            options={{tabBarIcon:({color})=>(<AntDesigns name="contacts" color={color} size={26}/>)}}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
  );
}

