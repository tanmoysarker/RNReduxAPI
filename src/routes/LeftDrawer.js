import React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComp {...props} />}>
      <Stack.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexGrow: 2}}>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
         <DrawerItem
          label="API Data"
          onPress={() => navigation.navigate('ApiScreen')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
