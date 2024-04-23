import * as Styled from './style';

type primary = 'primary';
type secondary = 'secondary';

interface ButtonType {
  backgroundColor: primary | secondary;
  textCaption: string;
  onClick?: () => void;
}

const StyledButton = ({ backgroundColor, textCaption, onClick }: ButtonType) => {
  return (
    <Styled.Button $backgroundColor={backgroundColor} onClick={onClick}>
      {textCaption}
    </Styled.Button>
  );
};

export default StyledButton;
