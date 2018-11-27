// REMINDER: must ALWAYS import React modules in every component you build!
import React from 'react';
// import AutoCompleteText.css
import './AutoCompleteText.css'; 

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
            // the term "state" is simply internal data belonging to an instance of the component it refers to
            // this.state is a special property within react and, in this case, refers to
            // the "this" keyword
            this.state = {
                suggestions: [],
                text: '',
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
        this.setState(() => ({ suggestions, text: value }));
    }
    
    // Below I've created the function 'SuggestionSelected' which will take the value of the 
    // suggestion and will be one of the items from the suggestion list as an argument
    SuggestionSelected (value) {
        // here I use 'this.setState()' to ensure teh value the textbox uses is the selected suggestion
        this.setState(() => ({
            text: value,
            suggestions: [],
        }));
    }
    
    // Here I've created this function to render the suggested results that appear as the user types
    renderSuggestions () {
        // First we destructure the suggestions from the state
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
                    // A bug occured here within this code that stated "cannot read map property of undefined"
                    // Since 'suggestions' has already been destructured in the code above, it is now passed as 
                    // a variable to be used within the rest of this code block. 
                    // At first, the code below read 'this.suggestions.map()' however we only need 'suggestions' from the destructured variable above.
                    <ul>
                        {suggestions.map((item) => <li onClick = {() => this.SuggestionSelected(item)}>{item}</li>)}
                    </ul>
                )
    }
    
    render () {
    // render function
    // destructure 'text' from "this.state" object
    const { text } = this.state;
        return (
                // the value in the textbox is now assigned to the 'text' value of our state
                <div className = "AutoCompleteText">
                    <input value = {text} onChange={this.onTextChanged} type = "text" />
                    {this.renderSuggestions()}
                </div>
            );
    }
}