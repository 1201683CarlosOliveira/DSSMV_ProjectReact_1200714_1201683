import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  View,
} from 'react-native';
import config from '../service/config';

class ReviewList extends React.Component {
  state = {
    isbn: '',
    recommended: false,
    review: '',
  };

  handleClick = async () => {
    const response = await config
      .get('book/' + this.state.isbn + '/review/self?userId=Mariana',)
      .catch(error => Alert.alert(error.message));
    this.setState({
      recommended: response.data.recommended,
      review: response.data.review,
    });
    Alert.alert(
      'Recomendado: ' +
        this.state.recommended +
        '\r\n' +
        'Review: ' +
        this.state.review,
    );
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.letras}>Isbn:</Text>
        <TextInput
          style={styles.input}
          placeholder="Isbn"
          placeholderTextColor="black"
          onChangeText={this.handleIsbn}
          keyboardType="numeric"
        />
        <Button
          style={styles.submitButton}
          title={'Enviar'}
          onPress={this.handleClick}
        />
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
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  letras: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  swicth: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default ReviewList;
