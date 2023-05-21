import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import themeContext from '../theme/themeContext';

const About = () => {
    const theme=useContext(themeContext);
  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <Text style={[styles.text,{color:theme.color}]}>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        fontWeight:'bold'
    }
})