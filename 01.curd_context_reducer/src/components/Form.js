import React, { useRef, useContext } from 'react';
import { UserDispatch } from '../App';
import useInputs from '../hooks/useInputs';

const Form = () => {
  const [formdata, onChange, reset] = useInputs({
    username: '',
    comment: '',
  });
  const { username, comment } = formdata;
  const dispatch = useContext(UserDispatch);

  const inputElment = useRef(null);
  const id = useRef(1);
  // MEMO: 채팅 글 생성하기 + useRef로 DOM 참조하기
  const commentCreate = () => {
    const userComment = {
      username,
      comment,
      id: id.current,
    };

    dispatch({ type: 'COMMENT_CREATE', userComment });
    reset();
    id.current++;
  };

  const onSubmit = e => {
    e.preventDefault();
    commentCreate(e);
    inputElment.current.focus();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={username}
        name="username"
        type="text"
        placeholder="Enter username.."
        className="form__input"
        ref={inputElment}
      />
      <textarea
        onChange={onChange}
        value={comment}
        name="comment"
        type="text"
        placeholder="here your opinion..."
        className="form__textarea"
      />
      <button>제출</button>
    </form>
  );
};

export default React.memo(Form);
