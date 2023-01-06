import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View} from 'react-native'; 
import BooksList from '../components/BooksList';
import SearchBooksList from '../components/SearchBooksList';

const SearchBook = (navigation) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Search your Book..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <BooksList/>
    </View>
      
  );
};

export default SearchBook;
