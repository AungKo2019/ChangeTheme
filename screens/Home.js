import { StyleSheet, Text, View,Switch, ImageBackgroundComponent } from 'react-native'
import React ,{useState,useContext}  from 'react'
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContext';

const Home = () => {
    const theme=useContext(themeContext);
    const [darkMode,setDarkMode]=useState(false);
  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <Text style={[styles.text,{color:theme.color}]}>Home</Text>
      <Switch value={darkMode} 
        style={{transform:[{scaleX:1.5},{scaleY:1.5}]}}
        onValueChange={(value)=>{
          setDarkMode(value);
          EventRegister.emit('ChangeTheme',value)
      }}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
    }
})