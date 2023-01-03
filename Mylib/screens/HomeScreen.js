import React from 'react';
import LibraryImg from 'Mylib/assets/library.svg'
import { 
  SafeAreaView, 
  View,
  Text,
  TouchableOpacity,
 } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen ({navigation}) {
  return (
    <SafeAreaView 
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
      <View style ={{marginTop: 20}}>
        <Text 
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#807573 '
        }}>MyLib</Text>
        </View> 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <LibraryImg width= {200} height={300}/>
        </View>
      <TouchableOpacity 
       style={{backgroundColor: '#DB4F31', padding: 20, width: 300, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 50}}
       onPress={() => navigation.navigate('Books')} >
      <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#fff'
        }}>List Books</Text>
      </TouchableOpacity>
      <Text></Text>
    </SafeAreaView>
  );
}

export default HomeScreen;