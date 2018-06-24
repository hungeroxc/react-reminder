import React, {Component} from 'react'
import './index.scss'
import {connect} from 'react-redux'
import {addReminder, deleteReminder, clearAll} from './../../actions'
import moment from 'moment'

const mapStateToProps = state => {
    return {
        reminders: state
    }
}

@connect(mapStateToProps, {addReminder, deleteReminder, clearAll})
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            date: ''
        }
    }

    inputText = e => {
        const text = e.target.value
        this.setState({text})
    }

    setTime = e => {
        const date = e.target.value
        this.setState({date})
    }

    addReminder = () => {
        this.props.addReminder(this.state.text, this.state.date)
        this.setState({
            text: '',
            date: ''
        })
    }

    deleteReminder = index => {
        this.props.deleteReminder(index)
    }

    clearAll = () => {
        this.props.clearAll()
    }

    rederReminders() {
        const {reminders} = this.props
        return (
            <ul className="list-group col-sm-8 mt-2">
            {
                reminders.map((item, i) => (
                    <li key={item.id} className="list-group-item">
                        <div className="list-item">
                        <div>{item.text}</div>
                        <div><em>{moment(new Date(item.date)).fromNow()}</em></div>
                        </div>
                        <div onClick={e => this.deleteReminder(i)} style={{float: 'right', cursor: 'pointer'}} className="list-item">&#x2715;</div>
                    </li>
                ))
            }
            </ul>
        )
    }

    render() {
        return (
            <div className="app">
                <div className="title">Reminder Pro</div>
                <div className="form-inline">
                    <div className="form-group mr-2">
                        <input 
                            value={this.state.text}
                            type="text" 
                            className="form-control"
                            placeholder="i have to..."
                            onChange={this.inputText}
                        />
                        <input 
                            type="datetime-local"
                            className="form-control"
                            onChange={this.setTime}
                        />
                    </div>
                    <button onClick={this.addReminder} type="button" className="btn btn-success">
                        add reminder
                    </button>
                    {this.rederReminders()}
                    <div onClick={this.clearAll} className="btn btn-danger mt-3">clear all</div>
                </div>
            </div>
        )
    }
}

export default App