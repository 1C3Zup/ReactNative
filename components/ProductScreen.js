import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ProductScreen = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get('https://api.codingthailand.com/api/course')
            setProduct(response.data.data)
        }
        getData();

    }, [])

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
            <Text>{item.title}</Text>
        )}
      />
    </View>
  )
}

export default ProductScreen