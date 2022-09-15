import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const NullRecipe = () => {

    return(
        <>
        <div className="memberInfo center" style={{ display: "block" }}>
            <StyledLink>
                <div className="icon">
                    <FontAwesomeIcon
                        icon={faUtensils}
                        className="userIcon"
                    />
                </div>
            </StyledLink>
            <p>해당 목록이 비어있습니다.</p>
        </div>
        </>
    );
}
export default NullRecipe;
export const StyledLink = styled.div`
  cursor: pointer;
  padding-top: 1em;
  color: ${(props) => props.theme.accentedColor};
  overflow: hidden;
  & :hover {
    color: #8d3232;
  }
  & .icon:hover {
    cursor: pointer;
    transition: all ease 1s;
    transform: rotate(360deg);
    padding: 2em;
  }
`;