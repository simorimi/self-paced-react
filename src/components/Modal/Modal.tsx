import * as Styled from './style';

interface ModalProps {
  title: string;
  setClose: () => void;
  children: JSX.Element;
}

const Modal = ({ title, setClose, children }: ModalProps) => {
  return (
    <Styled.Modal>
      <Styled.ModalBackdrop onClick={setClose} />
      <Styled.ModalContainer>
        <Styled.ModalTitle>{title}</Styled.ModalTitle>
        {children}
      </Styled.ModalContainer>
    </Styled.Modal>
  );
};

export default Modal;
