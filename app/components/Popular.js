import React, {Component} from 'react';

export default class Popular extends Component {
    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

        return (
            <ul className='flex-centre'>
                {languages.map(language => (
                    <li key={language}>
                        <button className='btn-clear nav-link'>
                            {language}
                        </button>
                    </li>
                ))
                }
            </ul>
        )
    }
}
