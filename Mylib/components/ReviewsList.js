import React, {Component} from 'react';
import api from '../service/config';

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


class ReviewsList extends Component {
    state = {
        home: [],
    };

    async componentDidMount() {
        const response = await api
            .get('library/89da2535-5474-4368-9fb4-7849df1d38b9/book')
            .catch(error => Alert.alert(error.message));
        this.setState({ home: response.data, });
    }

    render() {
        return (
            <SafeAreaView >
                <FlatList
                    data={this.state.home}
                    keyExtractor={item => item.isbn}
                    renderItem={reviewShow}/>
            </SafeAreaView>
        );
    }
}


const reviewShow = function (item) {
    const {isbn, user, review} = item.item;

    return (

        <View style= {{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#C9C8C9',
        }}>
            <TouchableOpacity >
                <Image
                    style={styles.photo}
                    source={{
                        uri: 'ALTERARRRRR O IP' + isbn + '-M.jpg',
                    }}/>
                <View style={styles.container}>
                    <Text style={styles.letrasLivros}>User: {user}</Text>
                    <Text style={styles.letrasLivros}>Review: {review}</Text>
                    <Text style={styles.letrasLivros}>Isbn: {isbn}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ReviewsList;


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
