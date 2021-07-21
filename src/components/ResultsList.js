import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView} from "react-native";
import ResultsDetail from "./ResultsDetail";
const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>
        {title} ({results.length})
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />

      {
        //For testing purposes only <Text>{JSON.stringify(results)}</Text>
      }
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10,
  },
});
