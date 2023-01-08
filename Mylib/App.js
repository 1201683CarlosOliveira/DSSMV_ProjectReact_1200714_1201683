import React from 'react';
import { Node } from 'react';

import HomeScreen from './screens/HomeScreen';
import AddBook from './screens/AddBook';
import Books from './screens/Books';
import AddReview from './screens/AddReview';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() { 
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:"Welcome"}} />
      <Stack.Screen name="AddBook" component={AddBook} options={{title:"Create a Book"}}/>
      <Stack.Screen name="Books" component={Books} options={{title:"List Books"}}/>
      <Stack.Screen name="AddReview" component={AddReview} options={{title:"Create a Review"}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
