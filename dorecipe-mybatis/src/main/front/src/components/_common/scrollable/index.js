import styled from "styled-components";

const ScrollableContent = ({ children }) => {
  return <Scrollable>{children}</Scrollable>;
};

const Scrollable = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  & > div {
    padding: 2rem;
    width: 90%;
    height: 1080px;
    overflow-y: auto;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      height: 30%;
      background-color: ${(props) => props.theme.mainColor};
    }
    ::-webkit-scrollbar-track {
      background-color: pink;
    }
  }
`;
export default ScrollableContent;
