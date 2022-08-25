import HeaderSearch from "./search";
import {HeaderContent, HeaderWrapper} from "./style";
const MainLayout = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <HeaderSearch />
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
};
export default MainLayout;
