import React from 'react';
// To make the codebase look cleaner, I've created a separate file that will house this particular
// component. Then, I will export this file and import it to the App.js file.
const Intro = (props) => (
    // It's fairly simple to reuse certain bits of code in your component and use it again in your 
    // App.js file. To do this, there is the 'props' object that you can use to display text and so forth
  <p className = "App-intro">
    {props.message}
  </p>
);

export default Intro;