import { useState, useEffect } from "react";
import yelp from "../Api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const SearchApi = async (searchTerm) => {
    try {
      const respose = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(respose.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    SearchApi("pizza");
    // console.log("Hi There");
  }, []);
  return [SearchApi, results, errorMessage];
};
