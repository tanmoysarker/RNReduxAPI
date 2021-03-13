import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios'; //Only import if using api

import {addData} from "../actions/dataAction.js";
import Icon from 'react-native-vector-icons/Ionicons';


export default function ApiData(props) {
    const dispatch = useDispatch();

    //1 - DECLARE VARIABLES
    const [isFetching, setIsFetching] = useState(false);

    //Access Redux Store State
    const dataReducer = useSelector((state) => state.dataReducer);
    const { data } = dataReducer;

    //==================================================================================================

    //2 - MAIN CODE BEGINS HERE
    useEffect(() => getData(), []);

    //==================================================================================================

    //3 - GET  DATA
    const getData = () => {
        setIsFetching(true);

        // API CALL
        // Prices changes after couple of seconds
        let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
        axios.get(url)
            .then(res => res.data)	
            .then((data) => dispatch(addData(data)))
            .catch(error => alert(error.message))
            .finally(() => setIsFetching(false));
    };
   
   
    //==================================================================================================

    //4 - RENDER
    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true}/>
            </View>
        );
    } else{
       var bitValue = data.bpi
       console.log(bitValue)
       if (bitValue !== undefined){
        return (
          <View style={styles.container}>
            <Text>{data.disclaimer}</Text>
            <Text style={styles.headerText}>{data.chartName}</Text>
            {Object.keys(bitValue).map(USD => {
              const item = bitValue[USD];
              return (
              <View style={styles.row}key={USD}>
                <Text>{item.description}</Text>
                <Text>{item.rate}</Text>
              </View>
            )})}
            <View style={styles.reload}>
             <Text style={styles.reloadText} onPress={()=>getData()}>Reload</Text>
             <Icon name="reload" size={20} color="#900" style={styles.icon}/>
            </View>
          </View>
      );
       }else{
         return (
            <TouchableOpacity onPress={()=>getData()}>
          <View style={styles.activityIndicatorContainer}>
              <View style={styles.reload}>
            
             <Text style={styles.reloadText}>Reload</Text>
             <Icon name="reload" size={20} color="#900" style={styles.icon}/>
            </View>
          </View>
          </TouchableOpacity>
         )
       }
    
    }
};

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor: '#F5F5F5', 
    padding:20
   },
   headerText:{
    fontSize: 20,
    fontWeight: "800",
    paddingTop:20,
    color:"#900",
    alignSelf:'center'
   },
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    },
    reload:{
      flexDirection:'row',
      width:90,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      backgroundColor:'#FFEFD5',
      borderRadius:8,
      marginTop:50,
      borderWidth:1
    },
    reloadText:{
      fontSize: 15,
      fontWeight: "800",
      color:"#900",
      alignSelf:'center'
     },
     icon: {
        marginLeft: 8,fontWeight:'bold'
     }
});

