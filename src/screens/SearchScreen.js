import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ResultsList from "../Components/ResultsList";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [SearchApi, results, errorMessage] = useResults();
  const filetrResultsBySize = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  // console.log(results);
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChanges={setTerm}
        onEndEditing={() => SearchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filetrResultsBySize("$")}
        />
        <ResultsList title="Bit Pricier" results={filetrResultsBySize("$$")} />
        <ResultsList title="Big Spender" results={filetrResultsBySize("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
