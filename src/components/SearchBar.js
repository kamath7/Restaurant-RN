import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={30} />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#F0EEEE",
    marginHorizontal: 15,
    borderRadius: 7,
    height: 50,
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
});
