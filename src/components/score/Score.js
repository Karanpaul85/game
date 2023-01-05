import React from "react";
import styles from "./Score.module.css";
import { useSelector } from "react-redux";
const Score = () => {
	const scrore = useSelector((state) => state.gameStartReducer.score);
	return <div className={styles.score}>Score : {scrore}</div>;
};
export default Score;
