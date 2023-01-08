import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSizes, spacing } from "../utils/sizes";

export const RestaurantList = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={styles.searchBar}>
        <Text style={styles.text}>Search</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>List</Text>
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flexDirection: "row",
    flex: 1,
    padding: spacing.md,
  },
  text: {
    fontSize: fontSizes.md,
    flex: 1,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "cyan",
    padding: spacing.md,
  },
});
