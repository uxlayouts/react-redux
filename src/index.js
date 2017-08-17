
import React from "react" // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom"
import registerServiceWorker from "./registerServiceWorker"
import { Provider } from "react-redux" // eslint-disable-line no-unused-vars
import App from "./components" // eslint-disable-line no-unused-vars
import configureStore from "./store/configure-store"

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
registerServiceWorker()

// // Original CRA Index
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
