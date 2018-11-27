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
            // we must use this.state to show the text we entered outside of the JS console
            // the term "state" is simply internal data belonging to an instance of a the component it refers to
            // this.state is a special property within react and, in this case, refers to
            // the "this" keyword
            this.state = {
                suggestions: [],
            }
    }
    
    // The function below is used to handle the user typing into the text box
    // As the user changes the text they write, the search results will also change simultaneously
    onTextChanged = (event) => {
        const value  = event.target.value;
        // initialize suggestions as an empty array
        let suggestions = [];
        if(value.length > 0){
            // Here we create a regex to test for matches in the 
            // item's list
            // As it so happens, I've also taken the liberty to name this variable "regex"
            const regex = new RegExp(`^${value}`, 'i');
            // This variable will take the contents of the array, sort it alphabetically
            // And then filter so to match the value of regex
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions }));
    }
    
    // Here I've created this function to render the suggested results that appear as the user types
    renderSuggestions () {
        // First we destructure the suggestions from the state
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
                    <ul>
                        {suggestions.map((item) => <li>{item}</li>)}
                    </ul>
                )
    }

    render () {
        return (
                <div>
                    <input onChange={this.onTextChanged} type = "text" />
                    {this.renderSuggestions()}
                </div>
            );
    }
}