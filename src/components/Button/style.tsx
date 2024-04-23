import styled from 'styled-components';

export const Button = styled.button<{ $backgroundColor: string }>`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
  background: ${(props) => (props.$backgroundColor === 'primary' ? props.theme.color.primary : 'transparent')};

  color: ${(props) => (props.$backgroundColor === 'primary' ? props.theme.color.grey100 : props.theme.color.grey300)};

  ${(props) => (props.$backgroundColor === 'primary' ? '' : `border: 1px solid ${props.theme.color.grey300};`)};
`;
