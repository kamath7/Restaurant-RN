import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <View>
      <SearchBar
        term={search}
        onTermChange={(newTerm) => setSearch(newTerm)}
        onTermSubmit={() => console.log("Term submitted")}
      />
      <Text>{search}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
