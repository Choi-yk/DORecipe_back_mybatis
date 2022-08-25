import { Link } from "react-router-dom";

const KnowhowList = ({ removePost, state }) => {
    const removePostOnclick = () => {
        removePost(state.know_num);
    };

    return(
        <>
            <li>
                <div className="knowNo">{state.know_num}</div>
                <Link className="knowTitle" to={`/knowhow/detail/${state.know_num}`}>
                    {state.know_title}
                </Link>
                <div className="knowDate">{state.know_creDate}</div>
                <div className="updateOrDelete">
                    <Link className="updateList" to={`/knowhow/update/${state.know_num}`}>
                        수정
                    </Link>
                    <span className="deleteList" onClick={removePostOnclick}>
                        삭제
                    </span>
                </div>
            </li>
        </>
    );
}

export default KnowhowList;
