import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useInput } from "../../../../hooks/useInput";
const HeaderSearch = () => {
  const [search, onChangeSearch, setSearch] = useInput("");
  return (
    <>
      <div className="searchWrap">
        <input
          type="search"
          name=""
          value={search}
          onChange={onChangeSearch}
          placeholder="검색하고 싶은 레시피의 키워드를 입력해주세요."
        />
        <button type="button" className="searchButton">
          <i className="fa-solid fa-magnifying-glass"></i>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </>
  );
};
export default HeaderSearch;
