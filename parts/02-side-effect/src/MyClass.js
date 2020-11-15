import React, { Component } from 'react';

export default class MyClass extends Component {
 
  constructor() {
		console.log('constructor');
		super();
		this.state = {
			count: 0
		};

		this.handleCount = this.handleCount.bind(this);
	}

	handleCount() {
		this.setState(state => ({
			count: state.count + 1
		}));
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmout');
	}

  render() { 
		console.log('render');
    return (
      <div>
        <h1> Class Component </h1>
        <p>
          <button onClick={ this.handleCount }>Count</button>
					{ this.state.count }
        </p>
      </div>
    );
  }
}
