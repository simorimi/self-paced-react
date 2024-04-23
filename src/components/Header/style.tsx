import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: ${(props) => props.theme.color.primary};
`;

export const Title = styled.h1`
  color: #fcfcfd;
`;

export const Button = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`;

export const Img = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
