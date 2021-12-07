import React from 'react';

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
        this.setState({quote: data[100].text})
        this.setState({author: data[100].author})
;    }
    render() {
        return <div>
            <h3>"{this.state.quote}"--{this.state.author}</h3>
            
        </div>;
    }
}