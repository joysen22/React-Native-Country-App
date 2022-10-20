import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Texts from "./Texts";
import { Color } from "../themes/Color";
import { Spacing } from "../themes/Spacing";

const DetailsText = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Texts>{title}</Texts>
      <Texts>{value}</Texts>
    </View>
  );
};

export default DetailsText;

const styles = StyleSheet.create({
  container: {
    borderColor: Color.White,
    borderWidth: 0.5,
    padding: Spacing[4],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: Spacing[1],
    marginTop: Spacing[5],
  },
});
