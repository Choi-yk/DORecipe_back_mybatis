import styled from "styled-components";
export const SubmitRecipeBtn = styled.button`
  display: block;
  width: 30em;
  color: #463635;
  background-color: #fffdf5;
  border: 1px solid #463635;
  padding: 0.3em;
  margin: 1em auto;
  border-radius: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #463635;
    color: #fffdf5;
    border: 1px solid #463635;
  }
`;
export const DefaultBtn = styled.button`
  display: block;
  width: 70vw;
  color: #463635;
  background-color: #fffdf5;
  border: 1px solid #463635;
  padding: 1em;
  margin: 1em auto;
  border-radius: 0.5em;
  cursor: pointer;

  & .fa-circle-plus {
    color: #463635;
  }
  &:hover {
    background-color: #463635;
    color: #fffdf5;
    border: 1px solid #463635;
  }
`;
