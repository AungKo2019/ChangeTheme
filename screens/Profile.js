import { StyleSheet,View, Text} from 'react-native'
import React,{useContext} from 'react'
import themeContext from '../theme/themeContext';

const Profile = () => {
    const theme=useContext(themeContext);
  return (
    <View style={[styles.container,{backgroundColor:theme.backgroundColor}]}>
      <Text style={[styles.text,{color:theme.color}]}>Profile Screen</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold'
    }

})