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
        api
            .get('book/' + this.state.isbn)
            .catch(error => Alert.alert(error.message));
        api
            .post('library/89da2535-5474-4368-9fb4-7849df1d38b9/book/' + this.state.isbn,
            {stock: this.state.stock},)
      
        .catch(error => Alert.alert(error.message));
        this.props.navigation.goBack();
        Alert.alert('Created With Success!');
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
                    placeholderTextColor="black"
                    onChangeText={this.handleIsbn}
                    keyboardType="numeric"
                />

                <Text style={styles.letters}>Stock:</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Stock"
                    placeholderTextColor="black"
                    onChangeText={this.handleStock}
                    keyboardType="numeric"
                />
       
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.handleClick}>
                    <Text style={styles.buttonText}>Create a Book</Text>
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
