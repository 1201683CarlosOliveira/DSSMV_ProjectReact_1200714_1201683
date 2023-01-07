import React from 'react';
import { View, StyleSheet } from 'react-native';
import Review from '../components/Review.js';

const Books = (navigation) => {
  return (
    <View style={styles.container}>
      <Review />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
});

export default Books;