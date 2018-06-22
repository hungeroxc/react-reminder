import React, {Component} from 'react'
import './index.scss'

class App extends Component {

    inputText = e => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="app">
                <div className="title">Reminder Pro</div>
                <div className="form-inline">
                    <div className="form-group mr-2">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="i have to..."
                            onChange={this.inputText}
                        />
                    </div>
                    <button type="button" className="btn btn-success">
                        add reminder
                    </button>
                </div>
            </div>
        )
    }
}

export default App