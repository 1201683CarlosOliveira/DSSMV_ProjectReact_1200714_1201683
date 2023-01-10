import React from 'react';
import { Node } from 'react';

import HomeScreen from './screens/HomeScreen';
import AddBook from './screens/AddBook';
import ListBooks from './screens/ListBooks';
import AddReview from './screens/AddReview';
import ListReviews from "./screens/ListReviews";
import ChangeReview from "./screens/ChangeReview";



import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:"Welcome"}} />
      <Stack.Screen name="AddBook" component={AddBook} options={{title:"Create a Book"}}/>
      <Stack.Screen name="ListBooks" component={ListBooks} options={{title:"List of Books"}}/>
      <Stack.Screen name="AddReview" component={AddReview} options={{title:"Create a Review"}} />
      <Stack.Screen name="ListReviews" component={ListReviews} options={{title:"List Review of a Book"}} />
      <Stack.Screen name="ChangeReview" component={ChangeReview} options={{title:"Change My Review of a Book"}} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
