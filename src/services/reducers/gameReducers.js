import { START_GAME, SCORE, KEYS } from "../Constent";
const gameInitialState = {
	player: { start: false },
	score: 0,
	keys: { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false },
};

export const gameStartReducer = (state = gameInitialState, { type, payload }) => {
	switch (type) {
		case START_GAME:
			let player = { ...state.player };
			player.start = payload;
			state = { ...state, player };
			return state;
		case SCORE:
			let score = state.score;
			score += 1;
			return { ...state, score };
		case KEYS:
			return { ...state, keys: payload };
		default:
			return state;
	}
};
