import styled from "styled-components";

export default function InputCustom({
	label,
	type,
	placeholder,
	onChange,
	...rest
}) {
	return (
		<InputCustomLabel>
			<span>{label}</span>
			<InputCustomStyled
				onChange={onChange}
				type={type}
				placeholder={placeholder}
				{...rest}
			/>
		</InputCustomLabel>
	);
}

export const InputCustomLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  & > span {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const InputCustomStyled = styled.input`
  width: 400px;
  height: 45px;
  background: #24211f;
  border-radius: 8px;
  padding: 0px 16px;
  font-size: 16px;
  border: 1px solid transparent;

  &::placeholder {
    color: #504f4e;
  }

  &:focus {
    border: 1px solid #a8a29e;
  }
`;

export const TextAreaCustomStyled = styled.textarea`
  width: 400px;
  min-height: 45px;
  background: #24211f;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  outline: none;
  border: 1px solid transparent;
  resize: none;
  font-family: inherit;
  color: inherit;

  &::placeholder {
    color: #504f4e;
  }

  &:focus {
    border: 1px solid #a8a29e;
  }
`;
