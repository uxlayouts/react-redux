
import React from "react" // eslint-disable-line no-unused-vars
import { object } from "prop-types"

const Person = ({ person }) => (
	<div>
		{person.lastname}, {person.firstname}
	</div>
)

Person.propTypes = {
	person: object.isRequired
}

export default Person
