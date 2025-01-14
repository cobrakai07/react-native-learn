import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Hello = () => {
    const[press,setPress]=useState(false);
    const pressHandler=()=>{
        setPress(!press);
    }
  return (
    <View style={styles.myStyle}>
      <Text>Hellooo!</Text>
      <Button title='Press Here' onPress={pressHandler}/>
      <Text>{ press&&"You pressed the button"}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    myStyle:{
        backgroundColor:"white",
        width:"100%",
        height:"100%"
    }
});

export default Hello