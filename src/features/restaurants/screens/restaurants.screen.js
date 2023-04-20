import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const StyledSearchBarView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledRestaurantListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSafeAreaView = styled(View)`
  flex: 1
  padding-top: ${(props) => props.paddingTop}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
`;

export const RestaurantsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <StyledSafeAreaView paddingTop={insets.top} paddingBottom={insets.bottom}>
      <StyledSearchBarView>
        <Searchbar />
      </StyledSearchBarView>
      <StyledRestaurantListView>
        <RestaurantInfoCard />
      </StyledRestaurantListView>
    </StyledSafeAreaView>
  );
};
