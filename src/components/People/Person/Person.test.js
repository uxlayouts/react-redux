
/* eslint no-use-before-define: 0 */  // --> OFF

import React from "react"
import ReactDOM from "react-dom"
import People from "."

const personData = {
	firstname: "John",
	lastname: "Smith",
}

it("renders without crashing", () => {
	const div = document.createElement("div")
	ReactDOM.render(<People person={personData} />, div)
})
