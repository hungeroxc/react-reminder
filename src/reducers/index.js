import {ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL} from './../constants'
import {bake_cookie, read_cookie} from 'sfcookies'


const reminder = action => {
    return {
        text: action.text,
        date: action.date,
        id: Math.random()
    }
}

const reminders = (state = read_cookie('reminders') || [], action = {}) => {
    let reminders = null
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            bake_cookie('reminders', reminders)
            return reminders
        case DELETE_REMINDER:
            reminders = [...state]
            reminders.splice(action.index, 1)
            bake_cookie('reminders', reminders)
            return reminders
        case CLEAR_ALL:
            reminders = []
            bake_cookie('reminders', reminders)
            return reminder
        default: return state
    }
}

export default reminders