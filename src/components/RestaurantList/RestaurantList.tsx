import * as Styled from './style';

export interface Restaurant {
  src: any;
  alt: string;
  subtitle: string;
  body: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
  handleOnClick: (restaurant: Restaurant) => void;
}

const RestaurantList = ({ restaurants, handleOnClick }: RestaurantListProps) => {
  const restaurantList = restaurants.map((restaurant) => {
    return (
      <Styled.Restaurant
        onClick={() => {
          handleOnClick(restaurant);
        }}
      >
        <Styled.RestaurantCategory>
          <Styled.CategoryIcon src={restaurant.src} alt={restaurant.alt} />
        </Styled.RestaurantCategory>
        <Styled.RestaurantInfo>
          <Styled.RestaurantName>{restaurant.subtitle}</Styled.RestaurantName>
          <Styled.RestaurantDescription>{restaurant.body}</Styled.RestaurantDescription>
        </Styled.RestaurantInfo>
      </Styled.Restaurant>
    );
  });

  return (
    <Styled.RestaurantListContainer>
      <Styled.RestaurantList>{restaurantList}</Styled.RestaurantList>
    </Styled.RestaurantListContainer>
  );
};

export default RestaurantList;
