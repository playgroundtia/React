import styled from "styled-components";

export const InputEditInPlace = styled.input.attrs({
  type: "text"
})`
  && {
    width: 50%;
  }
`;

export const TextAreaEditInPlace = styled.textarea.attrs({
  type: "text"
})`
  && {
    width: 50%;
  }
`;
