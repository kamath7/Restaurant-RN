import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const makeaSearch = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: search,
        location: "dallas",
      },
    });
    console.log(response.data.businesses);
    setResults(response.data.businesses);
  };
  return (
    <View>
      <SearchBar
        term={search}
        onTermChange={(newTerm) => setSearch(newTerm)}
        onTermSubmit={makeaSearch}
      />
      <Text>{search}</Text>
      <Text>You have around {results.length} restaurants for your search!</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
