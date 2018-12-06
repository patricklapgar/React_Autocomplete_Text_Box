import React, { Component } from 'react';


class Series extends Component {
    
    state = {
    series:[]
  }
  
  componentDidMount () {
    // fetch allows me to chain then methods to return the json format of our results from
    // the response object
    // API request here
    window.fetch('https://api.tvmaze.com/search/shows?q=Vikings')
    .then((response) => response.json())
    .then(json => this.setState({ series: json }))
  }
    
    render () {
        return (
                <div className = "App-series">        
                    The length of series array - {this.state.series.length}
                </div>
            )
    }
}

export default Series;