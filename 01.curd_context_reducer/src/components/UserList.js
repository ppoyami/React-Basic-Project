import React from 'react';
import { useState, useContext } from 'react';
import { UserDispatch } from '../App';

const User = ({ id, username, comment }) => {
  // MEMO: 글 수정 모드 (조건부 렌더링)
  const [updateValue, setUpdateValue] = useState(comment);
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useContext(UserDispatch);

  const updateMode = () => setIsUpdate(true);

  const commentRemove = () => {
    dispatch({ type: 'COMMENT_REMOVE', id });
  };

  const commentUpdate = () => {
    dispatch({ type: 'COMMENT_UPDATE', id, updateValue });
  };

  const updateComment = () => {
    commentUpdate(id, updateValue);
    setIsUpdate(false);
  };

  const updateChange = e => {
    setUpdateValue(e.target.value);
  };

  return (
    <li className="user">
      <h3 className="user__name">{username}</h3>

      {isUpdate ? (
        <form>
          <textarea value={updateValue} onChange={updateChange} />
        </form>
      ) : (
        <p className="user__comment">{comment}</p>
      )}

      <span className="user__buttons">
        <button onClick={commentRemove} className="btn btn--remove">
          삭제
        </button>

        {isUpdate ? (
          <button onClick={updateComment} className="btn btn--update">
            완료
          </button>
        ) : (
          <button onClick={updateMode} className="btn btn--update">
            수정
          </button>
        )}
      </span>
    </li>
  );
};

const UserList = ({ users }) => {
  return (
    <ul className="list">
      {users.map(({ username, comment, id }) => (
        <User key={id} id={id} username={username} comment={comment} />
      ))}
    </ul>
  );
};

export default React.memo(UserList);
