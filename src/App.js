import React from "react";
import GameArea from "./components/gameArea/GameArea";

function App() {
	const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };
	const keyDown = (e) => {
		keys[e.key] = true;
	};
	const keyUp = (e) => {
		keys[e.key] = false;
	};
	document.addEventListener("keydown", keyDown);
	document.addEventListener("keyup", keyUp);
	return (
		<div className='App'>
			<GameArea />
		</div>
	);
}

export default App;
