import { START_GAME, SCORE, KEYS } from "../Constent";

export const start = (data) => {
	return {
		type: START_GAME,
		payload: data,
	};
};

export const score = (data) => {
	return {
		type: SCORE,
		payload: data,
	};
};

export const updateKeys = (data) => {
	console.log(data);
	return {
		type: KEYS,
		payload: data,
	};
};
