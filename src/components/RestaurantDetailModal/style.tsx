import styled from 'styled-components';

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RestaurantInfoDescription = styled.p`
  ${(props) => props.theme.typography.textBody}
`;
