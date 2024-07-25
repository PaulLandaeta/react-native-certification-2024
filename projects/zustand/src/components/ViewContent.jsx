import { View, StyleSheet } from "react-native";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const ViewContent = ({ children }) => {
  const { colors, theme, toggleTheme } = useContext(ThemeContext);
  return (
    <View
      style={{ ...styles.container, backgroundColor: colors.backgroundColor }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewContent;