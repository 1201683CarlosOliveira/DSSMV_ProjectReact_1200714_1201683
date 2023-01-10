import React, {Component} from 'react';
import config from '../service/config';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


class BooksList extends Component {
  state = {
    home: [],
  };

  async componentDidMount() {
    const response = await config
      .get('library/e808292b-10f5-4d2d-83f0-6738f06196e5/book')
      .catch(error => Alert.alert(error.message));
    this.setState({ home: response.data, });
  }
  
  render() {
    return (
      <SafeAreaView >
        <FlatList 
           data={this.state.home}
           keyExtractor={item => item.isbn}
           renderItem={bookShow}/>
      </SafeAreaView>
    );
  }
}


  const bookShow = function (item) {
  const {isbn, stock, available, book} = item.item;
  
  return (
    
    <View style= {{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#C9C8C9',
    }}>
      
      <Image
        style={styles.photo}
        source={{
          uri: 'http://193.136.62.24/v1/assets/cover/' + isbn + '-M.jpg',
        }}/>
      <View style={styles.container}>
          <Text style={styles.letrasLivros}>Isbn: {isbn}</Text>
          <Text style={styles.letrasLivros}>Stock: {stock}</Text>
          <Text style={styles.letrasLivros}>Available: {available}</Text>
          <Text style={styles.letrasLivros}>Titulo: {book.title}</Text>
          <Text style={styles.letrasLivros}>Autor: {book.authors[0].name}</Text> 
      </View>

    </View>
  );
}

export default BooksList;


const styles = StyleSheet.create({
  photo: {
    borderRadius: 4,
    width: 80,
    height: 120,
   
  },
  letrasLivros: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

  