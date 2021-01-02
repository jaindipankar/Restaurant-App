import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChanges, onEndEditing }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={(newTerm) => onTermChanges(newTerm)}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    borderRadius: 15,
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 30,
    marginHorizontal: 15,
  },
});
export default SearchBar;
