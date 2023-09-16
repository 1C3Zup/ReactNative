import { View, Text, Button } from 'react-native'
import React from 'react'

const ThirdPage = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
        <Text>{'\n'}</Text>
          <Button
            title='Go Back'
            onPress={() => navigation.goBack()}
          />
        <Button
            title='Go to SecondPage...again'
            onPress={() => navigation.navigate('Second')}
            //pushเหมาะสำหรับดึงข้อมูลมาจากbackendอีกรอบ
          />
          <Button
            title='Reset Navigator to First Page'
            onPress={() => navigation.navigate('First')}
          />
      </View>
      )
}


export default ThirdPage