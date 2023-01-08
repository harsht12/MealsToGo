import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { colors } from "../../../utils/colors";
import { spacing } from "../../../utils/sizes";

export const RestaurantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/og-for-street-food-in-sydney.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restuarant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover style={styles.cover} key={name} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = new StyleSheet.create({
  card: {
    backgroundColor: colors.white,
  },
  cover: {
    padding: spacing.md,
    backgroundColor: colors.white,
  },
  title: {
    padding: spacing.sm,
  },
});
