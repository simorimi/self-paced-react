import * as Styled from './style';

const CATEGORY_OPTION = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'];
const SORT_OPTION = ['이름순', '거리순'];

interface CategoryFilterProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryFilter = ({ setCategory }: CategoryFilterProps) => {
  const categoryOptions = CATEGORY_OPTION.map((value) => <option value={value}>{value}</option>);
  // const sortOptions = SORT_OPTION.map((value) => <option value={value}>{value}</option>);

  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };

  return (
    <Styled.RestaurantFilterContainer>
      <Styled.Select name="category" aria-label="음식점 카테고리 필터" onChange={onChangeCategory}>
        {categoryOptions}
      </Styled.Select>
    </Styled.RestaurantFilterContainer>
  );
};

export default CategoryFilter;
{
  /* <Styled.Select name="sort" aria-label="음식점 분류 필터">
{sortOptions}
</Styled.Select> */
}
