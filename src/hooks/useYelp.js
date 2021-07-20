import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
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
  useEffect(() => {
    makeaSearch("fish");
  }, []);

  return [results, errorMsg, makeaSearch]
};
