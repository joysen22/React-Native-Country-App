import { StyleSheet, Text, View } from "react-native";
import { Color } from "../themes/Color";
import { Spacing } from "../themes/Spacing";
import { typography } from "../themes/Typography";
export const presets = {
  h1: {
    fontFamily: typography.secondary_bold,
    fontSize: 32,
    color: Color.White,
    fontWeight: "800",
  },
  h2: {
    fontFamily: typography.secondary,
    fontSize: 28,
    color: Color.White,
    fontWeight: "700",
  },
  h3: {
    fontFamily: typography.secondary,
    fontSize: 24,
    color: Color.White,
  },
  h4: {
    fontFamily: typography.primary_bold,
    fontSize: 20,
    color: Color.White,
  },
  h5: {
    fontFamily: typography.primary,
    fontSize: 16,
    color: Color.White,
  },
  small: {
    fontFamily: typography.primary,
    fontSize: 12,
    color: Color.White,
  },
};

const Texts = ({ children, style, preset = "h4" }) => {
  const costumStyle = StyleSheet.compose(presets[preset], style);
  return <Text style={costumStyle}>{children}</Text>;
};

export default Texts;
