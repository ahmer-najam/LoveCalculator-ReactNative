import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import DisplayStatus from "./components/DisplayStatus";

export default class App extends React.Component {
  state = {
    fname: "",
    sname: "",
    dataStatus: "loading"
  };

  onSubmit(fname, sname) {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "a71c186c10msh9519668e4b63c49p168d02jsna9030302e8ff"
        }
      }
    )
      .then(data => data.json())
      .then(data2 => {
        this.setState({ dataStatus: data2 });
      });
      console.log(this.state.dataStatus);
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label="Person Name (Male)"
          value={this.state.fname}
          onChangeText={text => this.setState({ fname: text })}
        />
        <TextInput
          label="Person Name (Female)"
          value={this.state.sname}
          onChangeText={text => this.setState({ sname: text })}
        />
        <Button
          mode="contained"
          onPress={this.onSubmit.bind(this, this.state.fname, this.state.sname)}
          style={{ margin: 10 }}
        >
          Press me
        </Button>
        <DisplayStatus data={this.state.dataStatus} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
