import React from "react" // eslint-disable-line no-unused-vars
import PeopleContainer from "./People" // eslint-disable-line no-unused-vars
import logo from "./assets/img/logo.svg"
import "./assets/scss/core.css"

const App = () => (
	<div className="wrapper">
		<div className="header">
			<img src={logo} className="logo" alt="logo" />
		</div>
		<div className="responsive-container-1">
			<PeopleContainer />
		</div>
	</div>
)

export default App
