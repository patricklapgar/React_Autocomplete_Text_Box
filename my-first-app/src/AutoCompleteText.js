// You must ALWAYS import React modules in every component you build!
import React from 'react';

// Write comment here about AutoCompleteText class
export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.items = [
                'David',
                'Damien',
                'Sara',
                'Jane',
            ];
    }

    render () {
        return (
                <div>
                    <input onChange = {(e) => console.log(e.target.value)} type = "text" />
                    <ul>
                        {this.items.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
            );
    }
}