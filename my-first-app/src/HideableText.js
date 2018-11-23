import React from 'react';

export default class HideableText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: false,
        }
        
    }
    
    // Below is the toggleIsHidden method which uses the 
    // setState method which sets the current state of the button to have the text revealed
    //The method below negates the current state of the button so it returns true above in the constructor function
    // once that value is true, the text should be hidden
    
    toggleIsHidden () {
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden,
        }))
    }
    
    render (){
        return (
                <div>
                    <button onClick = {() => this.toggleIsHidden()}>Toggle</button>
                    {!this.state.isHidden && this.props.text}
                </div>
            );
    }
}