import React from 'react';
import LibraryImg from 'Mylib/assets/library.svg'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen ({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      <View style ={{marginTop: 20}}>
        <Text style={styles.title}>MyLib</Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <LibraryImg width= {200} height={300}/>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddBook')} >
        <Text style={styles.buttonText}>Create a Book</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Books')} >
        <Text style={styles.buttonText}>List Books</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddReview')} >
        <Text style={styles.buttonText}>Create a Review</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Reviews')} >
        <Text style={styles.buttonText}>List Reviews</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 30,
    ontWeight: 'bold',
    color: '#807573',
  },

  button: {
    backgroundColor: '#DB4F31',
    padding: 10,
    width: 300,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeScreen;

