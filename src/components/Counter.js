import React from "react";
import {changeScore} from "../redux/actions";
import {connect, useDispatch} from "react-redux";

const Counter = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button className="counter-action decrement"
              onClick={() => dispatch(changeScore(props.id, -1))}> -</button>
      <span className="counter-score">{props.score}</span>
      {/*이벤트 핸들러 우측에는 함수 선언문이 와야 한다.*/}
      <button className="counter-action increment"
              onClick={() => dispatch(changeScore(props.id, 1))}> + </button>
    </div>
  );
}

export default Counter;