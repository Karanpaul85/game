import React from "react";
import styles from "./Info.module.css";
import { start } from "../../services/actions/action";
import { useDispatch } from "react-redux";
const Info = () => {
	const dispatch = useDispatch();
	return (
		<div className={styles.infoBox} onClick={() => dispatch(start(true))}>
			Click here to start the Game.
			<br />
			<strong>Note: if cars colid with each other game will stop</strong>
		</div>
	);
};
export default Info;
