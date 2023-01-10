import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Switch,
  TouchableOpacity,
} from 'react-native';
import config from '../service/config';

class ReviewChange extends Component {
  
    state = {
    isbn: '',
    userId: '',
    review: '',
    id: '',
    recommended: false,
  };
  
  handleClick = async () => {
    const response = await config
      .get('book/' + this.state.isbn + '/review/self?userId=' + this.state.userId,)
      .catch(error => Alert.alert(error.message));
        
      this.setState({id: response.data.id,});
        console.log(this.state.id);
   
    await config
      .put('book/' +this.state.isbn +'/review/' +this.state.id +'?userId=' +
      this.state.userId,
        {
          recommended: this.state.recommended,
          review: this.state.review,
        },
      )
      .catch(error => Alert.alert(error.message));

    Alert.alert('Review Changed with success!!');
  };

  handleIsbn = text => {
    this.setState({isbn: text});
  };
  handleReview = text => {
    this.setState({review: text});
  };
  handleUserId = text => {
    this.setState({userId: text});
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
        <Text style={styles.letras}>Review:</Text>
        <TextInput
          style={styles.input}
          placeholder="Review"
          placeholderTextColor="black"
          onChangeText={this.handleReview}
        />
        <Text style={styles.letras}>User:</Text>
        <TextInput
          style={styles.input}
          placeholder="User"
          placeholderTextColor="black"
          onChangeText={this.handleUserId}
        />
        <Text style={styles.letras}>
          {this.state.recommended ? 'Recomendado' : 'Não Recomendado'}
        </Text>

        <Switch
          style={styles.swicth}
          value={this.state.recommended}
          onValueChange={recommended => this.setState({recommended})}/>
        
        <TouchableOpacity 
            style={styles.submitButton}
            onPress={this.handleClick}>
            <Text style={styles.submitButtonText}>Send</Text>
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
export default ReviewChange;