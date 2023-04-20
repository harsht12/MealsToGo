import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const StyledSearchBarView = styled.View`
  padding: 16px;
`;

const StyledRestaurantListView = styled.View`
  background-color: yellow;
  flex: 1;
  padding: 16px;
`;

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
      <StyledSearchBarView>
        <Searchbar placeholder="Search" />
      </StyledSearchBarView>
      <StyledRestaurantListView>
        <RestaurantInfoCard />
      </StyledRestaurantListView>
    </View>
  );
};
