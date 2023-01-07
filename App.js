import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RestaurantList } from './src/components/RestaurantList';
import { SafeAreaProvider  } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>  
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <RestaurantList />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
});
