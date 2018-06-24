import {ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL} from './../constants'

export const addReminder = (text, date) => {
    return {
        type: ADD_REMINDER,
        text,
        date
    }
}

export const deleteReminder = index => {
    return {
        type: DELETE_REMINDER,
        index
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}