import {ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL} from './../constants'

const reminder = action => {
    return {
        text: action.text,
        date: action.date,
        id: Math.random()
    }
}

const reminders = (state = [], action = {}) => {
    switch(action.type) {
        case ADD_REMINDER:
            return [
                ...state,
                reminder(action)
            ]
        case DELETE_REMINDER:
            const list = [...state]
            list.splice(action.index, 1)
            return list
        case CLEAR_ALL:
            return []
        default: return state
    }
}

export default reminders