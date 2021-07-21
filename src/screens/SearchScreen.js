import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import useYelp from "../hooks/useYelp";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [results, makeaSearch, errorMsg] = useYelp();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={search}
        onTermChange={setSearch}
        onTermSubmit={() => makeaSearch(search)}
      />
      {errorMsg.length > 0 ? <Text>Something went wrong</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title={"Light Budget"}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title={"Moderate Budget"}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title={"Expensive"}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
