import { StyleSheet, Text, View , FlatList , SafeAreaView , ActivityIndicator, RefreshControl , refreshControl} from 'react-native'
import React, {useState, useEffect} from 'react'

const FlastListAPI = () => {

    const[refreshing,setRefreshing] = useState(true);
    const[dataSource,setDataSource] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    //service to get the data from the server to render
    const getData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((responseJson) => {
            setDataSource(responseJson);
            setRefreshing(false);
        }).catch((error) => {
            console.error(error);
        });
    };

    const ItemSeparatorView = () =>{
        return(
            //FlatList Item Separator
            <View
            style ={{
                height : 0.5,
                width : '100%',
                backgroundColor: '#a4a4b8'
            }}/>
        );
    };

    const onRefresh = () =>{
        //Clear old data of the list
        setDataSource([]);
        //Call the service to get the latest
        getData();
    }

    const getItem = (item)=>{
        //Function for click the item
        alert('Id : '+item.id+' Title : '+item.title)
    }

    const itemView = ({item})=>{
        return(
            <Text style = {styles.itemStyle} onPress={()=>getItem(item)}>
                {item.title}
            </Text>
        )
    }

  return (
    <SafeAreaView   SafeAreaView style={{flex:1,padding:10}}>
    <View style={styles.container}>
        {refreshing? <ActivityIndicator/> : null}
        <FlatList
            data={dataSource}
            keyExtractor={(index)=>index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={itemView}
            refreshControl={
                <RefreshControl
                 refreshing = {refreshing}
                 onRefresh = {onRefresh}/>
            }
        />
    </View>
</SafeAreaView>
  )
};

export default FlastListAPI

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        marginTop: 10,
    },
    itemStyle:{
        fontSize: 20,
        padding:10,
    },
});