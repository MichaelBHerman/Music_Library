import React from 'react';
import './quote.css';

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let result = getRandomNumber(0, 1000);

export default class FetchRandomQuote extends React.Component {
    state = {
        loading: true,
        quote: null,
        author: null,
    };

    async componentDidMount(){
        const url = "https://type.fit/api/quotes";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({quote: data[result].text})
        this.setState({author: data[result].author})
;    }
    render() {
        return <div className="quote">
            <h5>"{this.state.quote}"--{this.state.author}</h5>
            
        </div>;
    }
}