import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
      <Searchbar
        placeholder="Search your Book..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
  );
};

export default SearchBook;
