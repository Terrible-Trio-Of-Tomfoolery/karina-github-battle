import React, {Component} from 'react';
import './index.css'
import Popular from './components/Popular'

export default class App extends Component {
    render() {
        return (
        <div className='container'>
            <Popular/>
        </div>
        )
    };
}
