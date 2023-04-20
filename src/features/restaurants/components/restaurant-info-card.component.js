import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestuarantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: colors.white;
`;

export const RestaurantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Some Restaurant",
    // icon,
    photos = [
      "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/og-for-street-food-in-sydney.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restuarant;
  return (
    <RestaurantCard elevation={5}>
      <RestuarantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
