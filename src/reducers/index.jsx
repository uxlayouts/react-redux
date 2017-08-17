import { combineReducers } from "redux"
import people from "./people-reducer.js"

const rootReducer = combineReducers({
	people
})

export default rootReducer
