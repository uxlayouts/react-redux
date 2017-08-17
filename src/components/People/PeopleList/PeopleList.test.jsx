/* eslint no-use-before-define: 0 */  // --> OFF

import React from "react"
import ReactDOM from "react-dom"
import PersonList from "."

const personData = [
	{
		"firstname": "John",
		"lastname": "Smith",
	}
]

it("renders without crashing", () => {
	const div = document.createElement("div")
	ReactDOM.render(<PersonList key={personData.lastname} people={personData} />, div)
})
