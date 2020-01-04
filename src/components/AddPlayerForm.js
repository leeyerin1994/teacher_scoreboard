import React, {useState} from 'react';
import {addPlayer} from "../redux/actions";
import {connect, useDispatch} from "react-redux";

const AddPlayerForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    // form의 기본 이벤트 막기
    e.preventDefault();
    dispatch(addPlayer(value));
    setValue('');
  }

  return (
    <form className="form" onSubmit={submit}>
      <input type="text" className="input" placeholder="enter a player name" required
             value={value} onChange={(e) => setValue(e.target.value)} />
      <input type="submit" className="input" value="Add"></input>
    </form>
  );
}

export default AddPlayerForm;