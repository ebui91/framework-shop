import React from "react";
import "./App.css";

import Nav from "./Nav/Nav";
import router from '../router.js';

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			{ router }
		</div>
	);
}

export default App;
