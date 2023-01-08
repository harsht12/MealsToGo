import React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSizes, spacing } from "../../../utils/sizes";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={styles.searchBar}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  list: {
    backgroundColor: "yellow",
    flex: 1,
    padding: spacing.md,
  },
  text: {
    fontSize: fontSizes.md,
  },
  searchBar: {
    padding: spacing.md,
  },
});
