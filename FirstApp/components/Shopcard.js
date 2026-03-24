import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Shopcard = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.card}>
      <View style={styles.row2}>
        <View style={styles.ph}>
            Photo
        </View>
        <Text style={styles.title}>Margherita Pizza</Text>
      </View> 
        <Text style={styles.price}>$8.99</Text>
      <View style={styles.row}>
        <Button 
          title="-" 
          onPress={() =>{if (count>0){ setCount(count - 1);}} }
        />
        <Text style={styles.count}>{count}</Text>
        <Button 
          title="+" 
          onPress={() => setCount(count + 1)} 
        />
      </View>
    </View>
  );
};

export default Shopcard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 15,
    borderRadius: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:30,
    padding:10,
  },

  price: {
    fontSize: 16,
    color: "gray",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAA18F",
    padding:10,
    borderRadius:10,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding:10,
    borderRadius:10,
  },

  count: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ph:{
    backgroundColor: "#FAA18F",
    padding:10,
    borderRadius:10,
  },
});