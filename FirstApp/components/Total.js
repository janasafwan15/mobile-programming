import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Total = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View >
           Total
        </View>
        <Text style={styles.title}>$20.97</Text>
      </View> 
    </View>
  );
};

export default Total;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#814337",
    margin: 15,
    padding: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:200,
    padding:10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding:5,
    borderRadius:10,
  },
});