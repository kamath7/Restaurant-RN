import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#F0EEEE",
    marginHorizontal: 15,
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 17,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
