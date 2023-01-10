import * as React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity, 
  TextInput,
  StyleSheet,
  Alert,
  Switch,
} from 'react-native';
import config from '../service/config';

class ReviewAdd extends React.Component {
  state = {
    isbn: '',
    review: '',
    user: '',
    checkBox: false,
  };

  handleClick = async () => {
    config
      .post('book/' + this.state.isbn + '/review?userId=' + this.state.user, {
        recommended: this.state.checkBox,
        review: this.state.review,})
      .catch(error => Alert.alert(error.message));
      console.log(this.state);
    
    Alert.alert('Review Created With Success!!');
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  handleReview = text => {
    this.setState({review: text});
  };
  handleUser = text => {
    this.setState({user: text});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.letters}>Isbn:</Text>
        <TextInput
          style={styles.input}
          placeholder="Isbn"
          placeholderTextColor="#A9A9A9"
          onChangeText={this.handleIsbn}
          keyboardType="numeric"/>

        <Text style={styles.letters}>Review:</Text>
        <TextInput
          style={styles.input}
          placeholder="Review"
          placeholderTextColor="#A9A9A9"
          onChangeText={this.handleReview}/>

        <Text style={styles.letters}>User:</Text>
        <TextInput
          style={styles.input}
          placeholder="User"
          placeholderTextColor="#A9A9A9"
          onChangeText={this.handleUser}/>

        <Text style={styles.letters}>
          {this.state.checkBox ? 'Recommended' : 'Not Recommended'}
        </Text>
        <Switch
          style={styles.switch}
          value={this.state.checkBox}
          onValueChange={checkBox => this.setState({checkBox})}/>

        <TouchableOpacity 
            style={styles.submitButton}
            onPress={this.handleClick}>
            <Text style={styles.submitButtonText}>Create!</Text>
        </TouchableOpacity>
       
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
    padding: 10,
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
  
  switch: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default ReviewAdd;
