import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.imageUrl }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
//   container: { marginLeft: 10 },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
