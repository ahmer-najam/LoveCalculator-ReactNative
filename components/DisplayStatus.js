import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DisplayStatus = props => {
  console.log(props);
  if (props.data == "loading") {
    return <Text style={styles.text}>Please wait to get data or fill the form...</Text>;
  } else if (props.data.message) {
    return (
      <Text style={styles.text}>
        Sorry!!! something went wrong. Please try again
      </Text>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Love Percentage: {props.data.percentage}
        </Text>
        <Text style={styles.text}>Love Status: {props.data.result}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "primary"
  }
});

export default DisplayStatus;
