import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import useYelp from "../hooks/useYelp";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../components/ResultsList";
const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [makeaSearch, results, errorMsg] = useYelp();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
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
      <ResultsList results={filterResultsByPrice("$")} title={"Light Budget"} />
      <ResultsList
        results={filterResultsByPrice("$$")}
        title={"Moderate Budget"}
      />
      <ResultsList results={filterResultsByPrice("$$$")} title={"Expensive"} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
