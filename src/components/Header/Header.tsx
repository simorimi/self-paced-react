import * as Styled from './style';
import addButton from '../../assets/image/add-button.png';

interface HeaderProps {
  title: string;
  handleOnClick: () => void;
}
const Header = ({ title, handleOnClick }: HeaderProps) => {
  return (
    <Styled.Header>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Button onClick={handleOnClick}>
        <Styled.Img src={addButton} alt="음식점 추가" />
      </Styled.Button>
    </Styled.Header>
  );
};

export default Header;
