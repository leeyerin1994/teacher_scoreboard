import React from "react";
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

export const Player = (props) => (
  <div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
		</span>
    <Counter id={props.id} score={props.score} />
  </div>
);

const mapActionToProps = (dispatch) => ({
	// 왼쪼은 props, 오른쪽은 (액션을 디스패치하는)펑션
	removePlayer: (id) => dispatch(removePlayer(id))
})

// 커링 펑션, HoC 컴포넌튼
export default connect(null, mapActionToProps)(Player);