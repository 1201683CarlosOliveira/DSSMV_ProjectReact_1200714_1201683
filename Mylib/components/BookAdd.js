import * as React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import config from '../service/config';

class BookAdd extends React.Component {
  
    state = {
        isbn: '',
        stock: '',
    };

    handleClick = async () => {
        config
            .get('book/' + this.state.isbn)
            .catch(error => Alert.alert(error.message));
        config
            .post('library/e808292b-10f5-4d2d-83f0-6738f06196e5/book/' + this.state.isbn,
            {stock: this.state.stock},)
      
        .catch(error => Alert.alert(error.message));
        
        Alert.alert('Book Created With Success!');
    };

    handleIsbn = text => {
        this.setState({isbn: text});
    };
  
    handleStock = text => {
        this.setState({stock: text});
    };
  
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.letters}>Isbn:</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Isbn"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={this.handleIsbn}
                    keyboardType="numeric"/>

                <Text style={styles.letters}>Stock:</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Stock"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={this.handleStock}
                    keyboardType="numeric"/>
       
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.handleClick}>
                    <Text style={styles.buttonText}>Create!</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  
    container: {
        paddingTop: 23,
    },
    
    inputBox: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    
    button: {
        backgroundColor: '#DB4F31', 
        borderRadius: 10,
        padding: 10,
        margin: 15,
        height: 45, 
        borderRadius: 5, 
    },
    
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
  
    letters: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
});

export default BookAdd;

