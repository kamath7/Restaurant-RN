import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title} ({results.length})</Text>
      
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
     
     {//For testing purposes only <Text>{JSON.stringify(results)}</Text>
     }
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
