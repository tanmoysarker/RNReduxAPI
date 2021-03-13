import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';

import Home from '../screens/Home';
import ApiData from '../screens/ApiData';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

export default ({navigation}) => {
  const dispatch = useDispatch();

  const options = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        {/* <Text style={{margin: 8}}>Left</Text> */}
        <Icon name="menu" size={30} color="#900" style={{margin: 8}}/>
      </TouchableOpacity>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="HomeScreen" component={Home} />
      <Stack.Screen options={options} name="ApiScreen" component={ApiData} />
    </Stack.Navigator>
  );
};
