import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";

function SearchBar() {
  return (
    <View style={styles.container}>
        <Fontisto name="search" size={20} color={"#858585"}/>
        <Text style={styles.textSearch}>Search</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flexDirection: "row",
        margin: 5,
        height: 40,
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 10
    },
    textSearch: {
        color: "#858585",
        fontSize: 20,
        paddingLeft: 10
    }
})