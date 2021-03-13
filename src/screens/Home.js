import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../assets/styles';

export default () => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>BitCoin Price Live</Text>
    <Text style={styles.sectionDescription}>Open Drawer and view the prices</Text>
  </View>
);