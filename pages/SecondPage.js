import { View, Text, Button } from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
        <Text>{'\n'}</Text>
          <Button
            title='Go Back'
            onPress={() => navigation.goBack()}
          />
         {/*  <Button
            title='Go to SecondPage...again'
            onPress={() => navigation.push('Second')}
            //pushเหมาะสำหรับดึงข้อมูลมาจากbackendอีกรอบ
          /> */}
          <Button
            title='Go to First Page'
            onPress={() => navigation.navigate('First')}
          />
          <Button
            title='Go to Third Page'
            onPress={() => navigation.navigate('Third')}
          />
          
      </View>
      )
}


export default SecondPage