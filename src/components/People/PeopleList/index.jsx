import React from "react" // eslint-disable-line no-unused-vars
import { array } from "prop-types"
import Person from "../Person" // eslint-disable-line no-unused-vars

const PeopleList = ({ people }) => (
	<div className="wrapperCard">
		{people.map(person =>
			<div className="card">
				<Person key={person.lastname} person={person} />
			</div>
		)}
	</div>
)

PeopleList.propTypes = {
	people: array.isRequired
}

export default PeopleList
