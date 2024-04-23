import styled from 'styled-components';

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 36px;
`;

export const StyledLabel = styled.label<{ $required: boolean }>`
  color: ${(props) => props.theme.color.grey400};
  font-size: 14px;

  ${(props) => props.theme.typography.textCaption}

  ${(props) =>
    props.$required &&
    `&::after {
        padding-left: 4px;
        color: ${props.theme.color.primary};
        content: '*';}`}
`;

export const StyledSelect = styled.select`
  height: 44px;
  margin: 6px 0;
  padding: 8px;
  font-size: 16px;

  border: 1px solid ${(props) => props.theme.color.grey200};
  border-radius: 8px;

  color: ${(props) => props.theme.color.grey300};
`;

export const StyledInput = styled.input`
  height: 44px;
  padding: 8px;
  margin: 6px 0;

  border: 1px solid ${(props) => props.theme.color.grey200};
  border-radius: 8px;

  font-size: 16px;
`;

export const StyledDescription = styled.textarea`
  margin: 6px 0;
  padding: 8px;
  font-size: 16px;
  resize: none;
  border: 1px solid ${(props) => props.theme.color.grey200};
  border-radius: 8px;
`;

export const StyledHelpText = styled.span`
  color: ${(props) => props.theme.color.grey300};
  ${(props) => props.theme.typography.textCaption}
`;
