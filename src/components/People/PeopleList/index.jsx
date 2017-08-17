import React from "react" // eslint-disable-line no-unused-vars
import { array } from "prop-types"
import Person from "../Person" // eslint-disable-line no-unused-vars

const PeopleList = ({ people }) => (
	<div>
		{people.map(person =>
			<Person key={person.lastname} person={person} />
		)}
	</div>
)

PeopleList.propTypes = {
	people: array.isRequired
}

export default PeopleList
