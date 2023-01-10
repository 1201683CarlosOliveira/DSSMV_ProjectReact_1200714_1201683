import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  View,
  TouchableOpacity,
} from 'react-native';
import config from '../service/config';

class ReviewList extends React.Component {
  state = {
    isbn: '',
    userId: '',
    recommended: false,
    review: '',
  };

  handleClick = async () => {
    const response = await config
      .get('book/' + this.state.isbn + '/review/self?userId='+ this.state.userId,)
      .catch(error => Alert.alert(error.message));
    this.setState({
      recommended: response.data.recommended,
      review: response.data.review,
    });
    /*
    Alert.alert(
      'Recomendado: ' +
        this.state.recommended +
        '\r\n' +
        'Review: ' +
        this.state.review,
    );*/
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  handleUserId = text => {
    this.setState({userId: text});
  };
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.letters}>Isbn:</Text>
        <TextInput
          style={styles.input}
          placeholder="Isbn"
          placeholderTextColor="black"
          onChangeText={this.handleIsbn}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="UserId"
          placeholderTextColor="black"
          onChangeText={this.handleUserId}
        />
        <TouchableOpacity 
            style={styles.submitButton}
            onPress={this.handleClick}>
            <Text style={styles.submitButtonText}>Send</Text>
        </TouchableOpacity>
       
       
        <View style={styles.show}>
        <Text style={styles.letras}>
          {this.state.recommended ? 'Recomendado' : 'Não Recomendado'}
        </Text>
          <Text style={styles.letters}>Review: {this.state.review}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#DB4F31', 
    borderRadius: 10,
    padding: 9,
    margin: 15,
    height: 45, 
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  letters: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  show: {
    marginTop: 100,
  },
});

export default ReviewList;
