import StyledButton from '../Button/Button';
import { StyledButtonContainer } from '../ButtonContainer/style';
import Modal from '../Modal/Modal';
import { Restaurant } from '../RestaurantList/RestaurantList';
import * as Styled from './style';

interface RestaurantDetailModalProps {
  restaurant: Restaurant | null;
  handleOnClick: () => void;
}
const RestaurantDetailModal = ({ restaurant, handleOnClick }: RestaurantDetailModalProps) => {
  if (restaurant)
    return (
      <Modal title={restaurant.subtitle} setClose={handleOnClick}>
        <>
          <Styled.RestaurantInfo>
            <Styled.RestaurantInfoDescription>{restaurant.body}</Styled.RestaurantInfoDescription>
          </Styled.RestaurantInfo>
          <StyledButtonContainer>
            <StyledButton backgroundColor="primary" textCaption="닫기" onClick={handleOnClick} />
          </StyledButtonContainer>
        </>
      </Modal>
    );
};

export default RestaurantDetailModal;
