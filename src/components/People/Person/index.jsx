
import React from "react" // eslint-disable-line no-unused-vars
import { object } from "prop-types"

const Person = ({ person }) => (
	<div>
		<small>{person.lastname}</small><br />
		<small>{person.firstname}</small><br />
	</div>
)

Person.propTypes = {
	person: object.isRequired
}

export default Person
