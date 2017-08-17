import React, { Component } from "react" // eslint-disable-line no-unused-vars
import { array, object } from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as peopleActions from "../../actions/people-actions"
import PeopleList from "./PeopleList" // eslint-disable-line no-unused-vars
import PersonInput from "./PersonInput" // eslint-disable-line no-unused-vars

function mapStateToProps (state) {
	return {
		people: state.people
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(peopleActions, dispatch)
	}
}

class PeopleContainer extends Component {
	constructor (props) {
		super(props)

		this.state = {
			people: []
		}
	}

	render () {
		const { people } = this.props

		return (
			<div>
				<PersonInput addPerson={this.props.actions.addPerson} />
				<br />
				<PeopleList people={people} />
			</div>
		)
	}
}

PeopleContainer.propTypes = {
	people: array.isRequired,
	actions: object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
