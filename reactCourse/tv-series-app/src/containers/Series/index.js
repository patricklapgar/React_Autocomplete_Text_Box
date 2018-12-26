import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro'

class Series extends Component {
    
    state = {
    series:[],
    seriesName: '',
    isFetching: false
  }
  
    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true});
        // fetch allows me to chain then methods to return the json format of our results from
        // the response object
        // API request here
        window.fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({ series: json, isFetching: false }))
    }
    
    render () {
        const { series, seriesName, isFetching } = this.state;
        return (
                <div className = "App-series">
                    <Intro message = "Here you can find alll of your most loved series" />
                    <div>
                        <input 
                            value = {seriesName} 
                            type = "text" 
                            onChange={this.onSeriesInputChange} />
                    </div>
                    { 
                        series.length === 0 && seriesName.trim() === '' 
                        &&
                        <p>Please enter the series name into the input</p>
                    }
                    {
                        !isFetching && series.length === 0 && seriesName.trim() !== ''
                        &&
                        <p>No TV series have been found with this name</p>
                    }
                    {
                       isFetching && <Loader />
                    }
                    {
                        !isFetching && <SeriesList list = {this.state.series} />
                    }
                </div>
            );
    }
}

export default Series;