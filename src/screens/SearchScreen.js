import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const makeaSearch = async (initialSearch) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: initialSearch, //probably can use useEffect
          location: "dallas",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMsg(error);
    }
  };
  return (
    <View>
      <SearchBar
        term={search}
        onTermChange={(newTerm) => setSearch(newTerm)}
        onTermSubmit={() => makeaSearch(search)}
      />
      {errorMsg.length > 0 ? <Text>Something went wrong</Text> : null}
      <Text>{search}</Text>
      <Text>You have around {results.length} restaurants for your search!</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
