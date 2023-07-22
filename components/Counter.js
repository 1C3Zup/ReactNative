import { StyleSheet,Text,View,Button } from "react-native-web";
import React from 'react'
import { useState } from "react";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

const Counter = () => {

    const [count,setCount] = useState(0);

    return (
        <view style ={styles.container}>
            <Text>{count}</Text>
            <Button
            title='Click Me'
            onPress = {() => {setCount(count+1)}}
            />
            

        </view>
    )
}


export default Counter
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  }
})