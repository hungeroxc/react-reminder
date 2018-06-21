import React, {Component} from 'react'

import './index.scss'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="title">Reminder Pro</div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="i have to..."
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App