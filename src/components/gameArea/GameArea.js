import React from "react";
import Info from "../info/Info";
import Road from "../road/Road";
import Score from "../score/Score";
import styles from "./gameArea.module.css";
const GameArea = () => {
	return (
		<div className={styles.gameArea}>
			<Score />
			<Info />
			<Road />
		</div>
	);
};
export default GameArea;
