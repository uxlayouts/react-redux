// import React, { Component } from 'react';
// import Home from './Home';
// import './assets/scss/core.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="">
//         <Home />
//       </div>
//     );
//   }
// }
//
// export default App;

import React from "react" // eslint-disable-line no-unused-vars
import PeopleContainer from "./People" // eslint-disable-line no-unused-vars
import Home from "./Home" // eslint-disable-line no-unused-vars
import logo from "./assets/img/logo.svg"
import "./assets/scss/core.css"

const App = () => (
	<div className="">
		<div className="header">
			<img src={logo} className="App-logo" alt="logo" />
		</div>
		<Home />
		<PeopleContainer />
	</div>
)

export default App
