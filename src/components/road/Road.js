import React from "react";
import Car from "../car/Car";
import styles from "./Road.module.css";
const Road = () => {
	return (
		<div className={styles.road}>
			<Car />
		</div>
	);
};
export default Road;
