import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [name, setName] = useState('');
  // const headerName = navigation.setParam('')
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    

  };
  useEffect(() => {
    getResult(id);
    

  }, []);


  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.heading}>{result.name}</Text>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>
        Address:{" "}
        {result.location.display_address.reduce(
          (add, text) => add + " " + text,
          ""
        )}
      </Text>
      <ScrollView>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return (
              <Image
                style={styles.image}
                source={{
                  uri: item,
                }}
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

// ResultsShowScreen.navigationOptions = (navigationData) => {
//   return {
//     headerTitle: navigationData.navigation.getParam("name"),
//   };
// };
export default ResultsShowScreen;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginVertical: 10,
  },
});
