import { useState } from 'react';
import StyledButton from '../Button/Button';
import { StyledButtonContainer } from '../ButtonContainer/style';
import Modal from '../Modal/Modal';
import { Restaurant } from '../RestaurantList/RestaurantList';
import { StyledDescription, StyledFormItem, StyledHelpText, StyledInput, StyledLabel, StyledSelect } from './style';
import korean from '../../assets/image/category-korean.png';
import chinese from '../../assets/image/category-chinese.png';
import japanese from '../../assets/image/category-japanese.png';
import western from '../../assets/image/category-western.png';
import asian from '../../assets/image/category-asian.png';
import etc from '../../assets/image/category-etc.png';

const OPTION_VALUE = ['선택해 주세요', '한식', '중식', '일식', '양식', '아시안', '기타'];
const options = OPTION_VALUE.map((value) => <option value={value}>{value}</option>);

type SRC = korean | chinese | japanese | western | asian | etc;

interface AddRestaurantModalProps {
  handleOnClick: () => void;
  handleButtonClick: (restaurant: Restaurant) => void;
}

const AddRestaurantModal = ({ handleOnClick, handleButtonClick }: AddRestaurantModalProps) => {
  const [category, setCategory] = useState<string>('');
  const [src, setSrc] = useState<SRC>('');
  const [body, setBody] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');

  const srcTransform = (category: string) => {
    return category === '한식'
      ? korean
      : category === '중식'
        ? chinese
        : category === '일식'
          ? japanese
          : category === '양식'
            ? western
            : category === '아시안'
              ? asian
              : etc;
  };

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
    setSrc(srcTransform(event.currentTarget.value));
  };
  const handleSubtitle = (event: React.ChangeEvent<HTMLInputElement>) => setSubtitle(event.currentTarget.value);
  const handleBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => setBody(event.currentTarget.value);

  return (
    <Modal title="새로운 음식점" setClose={handleOnClick}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleButtonClick({ src: src, alt: category, body: body, subtitle: subtitle });
          handleOnClick();
        }}
      >
        <StyledFormItem>
          <StyledLabel htmlFor="category" $required={true}>
            카테고리
          </StyledLabel>
          <StyledSelect name="category" id="category" onChange={handleCategory} required>
            {options}
          </StyledSelect>
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel htmlFor="name" $required={true}>
            이름
          </StyledLabel>
          <StyledInput type="text" name="name" id="name" onChange={handleSubtitle} required />
        </StyledFormItem>
        <StyledFormItem>
          <StyledLabel htmlFor="description" $required={false}>
            설명
          </StyledLabel>
          <StyledDescription name="description" id="description" onChange={handleBody} cols={30} rows={5} />
          <StyledHelpText>메뉴 등 추가 정보를 입력해 주세요.</StyledHelpText>
        </StyledFormItem>
        <StyledButtonContainer>
          <StyledButton backgroundColor="primary" textCaption="추가하기" />
        </StyledButtonContainer>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;
