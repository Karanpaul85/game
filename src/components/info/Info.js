import React from "react";
import styles from "./Info.module.css";
const Info = () => {
	return (
		<div className={styles.infoBox}>
			Click here to start the Game.
			<br />
			<strong>Note: if cars colid with each other game will stop</strong>
		</div>
	);
};
export default Info;
