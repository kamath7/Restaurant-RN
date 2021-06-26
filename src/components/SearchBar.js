import React from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'

const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
        <Text>Searchbar</Text>
           <TextInput/>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
searchBar:{
    backgroundColor :'#F0EEEE',
    marginHorizontal: 15,
    borderRadius: 7,
    height: 50
}
})
