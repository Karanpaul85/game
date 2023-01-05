import React from "react";
import Info from "../info/Info";
import Road from "../road/Road";
import Score from "../score/Score";
import styles from "./gameArea.module.css";
import { useSelector, useDispatch } from "react-redux";
import { score, updateKeys } from "../../services/actions/action";

const GameArea = () => {
	const dispatch = useDispatch();
	const gameStart = useSelector((state) => state.gameStartReducer.player.start);
	const keys = useSelector((state) => state.gameStartReducer.keys);
	const keyDown = (e) => {
		keys[e.key] = true;
		dispatch(updateKeys(keys));
	};
	const keyUp = (e) => {
		keys[e.key] = false;
		dispatch(updateKeys(keys));
	};
	const startgame = () => {
		if (gameStart) {
			document.addEventListener("keydown", keyDown);
			document.addEventListener("keyup", keyUp);
			dispatch(score(1));
			window.requestAnimationFrame(startgame);
		}
	};
	window.requestAnimationFrame(startgame);
	return (
		<div className={styles.gameArea}>
			<Score />
			{!gameStart && <Info />}
			<Road />
		</div>
	);
};
export default GameArea;
