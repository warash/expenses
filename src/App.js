import React from 'react';
import './App.css';
import ExpensesDashboard from './dashboard/ExpensesDashboard'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store'

const store = createStore(reducer);


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ExpensesDashboard/>
            </div>
        </Provider>
    );
}

export default App;
